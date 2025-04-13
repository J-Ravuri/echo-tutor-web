'use server';
/**
 * @fileOverview Generates personalized learning paths for students based on uploaded content.
 *
 * - generatePersonalizedLessons - A function that generates personalized lessons.
 * - GeneratePersonalizedLessonsInput - The input type for the generatePersonalizedLessons function.
 * - GeneratePersonalizedLessonsOutput - The return type for the generatePersonalizedLessons function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GeneratePersonalizedLessonsInputSchema = z.object({
  content: z.string().describe('The content to generate lessons from (audio transcription or PDF text).'),
  userAge: z.number().describe('The age of the user.'),
  userName: z.string().describe('The name of the user.'),
});
export type GeneratePersonalizedLessonsInput = z.infer<typeof GeneratePersonalizedLessonsInputSchema>;

const GeneratePersonalizedLessonsOutputSchema = z.object({
  lessons: z.array(z.string()).describe('An array of personalized lesson steps.'),
});
export type GeneratePersonalizedLessonsOutput = z.infer<typeof GeneratePersonalizedLessonsOutputSchema>;

export async function generatePersonalizedLessons(input: GeneratePersonalizedLessonsInput): Promise<GeneratePersonalizedLessonsOutput> {
  return generatePersonalizedLessonsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedLessonsPrompt',
  input: {
    schema: z.object({
      content: z.string().describe('The content to generate lessons from.'),
      userAge: z.number().describe('The age of the user.'),
      userName: z.string().describe('The name of the user.'),
    }),
  },
  output: {
    schema: z.object({
      lessons: z.array(z.string()).describe('An array of personalized lesson steps.'),
    }),
  },
  prompt: `You are an AI tutor specializing in creating personalized lessons for 11+ exam preparation.

You will generate step-by-step lessons based on the provided content, tailored to the user's age and learning style. The lessons should be in the voice of a younger version of the user, making it more relatable and engaging.

Content: {{{content}}}
User Age: {{{userAge}}}
User Name: {{{userName}}}

Generate the lessons as a numbered list of steps.
`,
});

const generatePersonalizedLessonsFlow = ai.defineFlow<
  typeof GeneratePersonalizedLessonsInputSchema,
  typeof GeneratePersonalizedLessonsOutputSchema
>({
  name: 'generatePersonalizedLessonsFlow',
  inputSchema: GeneratePersonalizedLessonsInputSchema,
  outputSchema: GeneratePersonalizedLessonsOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
