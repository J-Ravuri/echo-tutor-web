'use server';
/**
 * @fileOverview A personalized learning path generation AI agent.
 *
 * - personalizeLearningPath - A function that handles the learning path generation process.
 * - PersonalizeLearningPathInput - The input type for the personalizeLearningPath function.
 * - PersonalizeLearningPathOutput - The return type for the personalizeLearningPath function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {getCurriculum, Topic} from '@/services/eleven-plus-curriculum';

const PersonalizeLearningPathInputSchema = z.object({
  contentUrl: z.string().describe('The URL of the uploaded content (audio or PDF).'),
  contentType: z.enum(['audio', 'pdf']).describe('The type of the uploaded content.'),
});
export type PersonalizeLearningPathInput = z.infer<typeof PersonalizeLearningPathInputSchema>;

const PersonalizeLearningPathOutputSchema = z.object({
  learningPath: z.array(
    z.object({
      topic: z.string().describe('The topic to learn.'),
      description: z.string().describe('A brief description of the topic.'),
      reason: z.string().describe('The reason why this topic is important based on the content.'),
    })
  ).describe('The personalized learning path.'),
});
export type PersonalizeLearningPathOutput = z.infer<typeof PersonalizeLearningPathOutputSchema>;

export async function personalizeLearningPath(
  input: PersonalizeLearningPathInput
): Promise<PersonalizeLearningPathOutput> {
  return personalizeLearningPathFlow(input);
}

const analyzeContentPrompt = ai.definePrompt({
  name: 'analyzeContentPrompt',
  input: {
    schema: z.object({
      contentUrl: z.string().describe('The URL of the uploaded content (audio or PDF).'),
      contentType: z.string().describe('The type of the uploaded content.'),
      curriculum: z.string().describe('The 11+ curriculum topics.'),
    }),
  },
  output: {
    schema: z.array(
      z.object({
        topic: z.string().describe('The topic to learn.'),
        description: z.string().describe('A brief description of the topic.'),
        reason: z.string().describe('The reason why this topic is important based on the content.'),
      })
    ),
  },
  prompt: `You are an AI assistant designed to create personalized learning paths for students preparing for the 11+ exam in the UK.

You will receive content (audio or PDF) uploaded by the student and a list of 11+ curriculum topics.

Your task is to analyze the content and identify the most relevant topics for the student to focus on.

Based on the content, create a learning path consisting of the most relevant topics from the 11+ curriculum.

Consider the student's learning needs and the importance of each topic in the content.

Here is the content URL: {{{contentUrl}}}.
Content Type: {{{contentType}}}.

Here is the 11+ curriculum: {{{curriculum}}}

Create a JSON array of objects with topic, description, and reason fields. Limit the number of topics to at most 5.
`,
});

const personalizeLearningPathFlow = ai.defineFlow<
  typeof PersonalizeLearningPathInputSchema,
  typeof PersonalizeLearningPathOutputSchema
>(
  {
    name: 'personalizeLearningPathFlow',
    inputSchema: PersonalizeLearningPathInputSchema,
    outputSchema: PersonalizeLearningPathOutputSchema,
  },
  async input => {
    const curriculum: Topic[] = await getCurriculum();
    const curriculumString = JSON.stringify(curriculum);
    const {output} = await analyzeContentPrompt({
      ...input,
      curriculum: curriculumString,
    });
    return {learningPath: output!};
  }
);
