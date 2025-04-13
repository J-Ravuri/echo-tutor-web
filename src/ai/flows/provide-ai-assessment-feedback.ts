'use server';
/**
 * @fileOverview An AI assessment feedback flow.
 *
 * - provideAIAssessmentFeedback - A function that provides AI assessment feedback.
 * - ProvideAIAssessmentFeedbackInput - The input type for the provideAIAssessmentFeedback function.
 * - ProvideAIAssessmentFeedbackOutput - The return type for the provideAIAssessmentFeedback function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const ProvideAIAssessmentFeedbackInputSchema = z.object({
  topic: z.string().describe('The topic of the assessment.'),
  studentAnswer: z.string().describe('The student\u0027s answer to the assessment question.'),
  correctAnswer: z.string().describe('The correct answer to the assessment question.'),
  studentKnowledgeLevel: z.string().describe('The student\u0027s current knowledge level.'),
});
export type ProvideAIAssessmentFeedbackInput = z.infer<
  typeof ProvideAIAssessmentFeedbackInputSchema
>;

const ProvideAIAssessmentFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Detailed feedback on the student\u0027s answer.'),
  areasForImprovement: z.string().describe('Specific areas for improvement.'),
});
export type ProvideAIAssessmentFeedbackOutput = z.infer<
  typeof ProvideAIAssessmentFeedbackOutputSchema
>;

export async function provideAIAssessmentFeedback(
  input: ProvideAIAssessmentFeedbackInput
): Promise<ProvideAIAssessmentFeedbackOutput> {
  return provideAIAssessmentFeedbackFlow(input);
}

const provideAIAssessmentFeedbackPrompt = ai.definePrompt({
  name: 'provideAIAssessmentFeedbackPrompt',
  input: {
    schema: z.object({
      topic: z.string().describe('The topic of the assessment.'),
      studentAnswer: z.string().describe('The student\u0027s answer to the assessment question.'),
      correctAnswer: z.string().describe('The correct answer to the assessment question.'),
      studentKnowledgeLevel: z.string().describe('The student\u0027s current knowledge level.'),
    }),
  },
  output: {
    schema: z.object({
      feedback: z.string().describe('Detailed feedback on the student\u0027s answer.'),
      areasForImprovement: z.string().describe('Specific areas for improvement.'),
    }),
  },
  prompt: `You are an AI assessment tool that provides detailed feedback to students on their answers. The student is studying for the 11+ exam.

  Topic: {{{topic}}}
  Student Knowledge Level: {{{studentKnowledgeLevel}}}
  Student's Answer: {{{studentAnswer}}}
  Correct Answer: {{{correctAnswer}}}

  Provide detailed feedback on the student's answer, and identify specific areas for improvement.
  `,
});

const provideAIAssessmentFeedbackFlow = ai.defineFlow<
  typeof ProvideAIAssessmentFeedbackInputSchema,
  typeof ProvideAIAssessmentFeedbackOutputSchema
>(
  {
    name: 'provideAIAssessmentFeedbackFlow',
    inputSchema: ProvideAIAssessmentFeedbackInputSchema,
    outputSchema: ProvideAIAssessmentFeedbackOutputSchema,
  },
  async input => {
    const {output} = await provideAIAssessmentFeedbackPrompt(input);
    return output!;
  }
);
