/**
 * Represents a topic in the 11+ curriculum.
 */
export interface Topic {
  /**
   * The name of the topic.
   */
  name: string;
  /**
   * A brief description of the topic.
   */
  description: string;
}

/**
 * Asynchronously retrieves the list of topics in the 11+ curriculum.
 *
 * @returns A promise that resolves to an array of Topic objects.
 */
export async function getCurriculum(): Promise<Topic[]> {
  // TODO: Implement this by calling an API or reading from a data source.
  return [
    {
      name: 'Mathematics',
      description: 'Basic mathematical concepts and problem-solving.'
    },
    {
      name: 'English',
      description: 'Reading comprehension, grammar, and vocabulary.'
    },
    {
      name: 'Verbal Reasoning',
      description: 'Logic and reasoning using words and language.'
    },
    {
      name: 'Non-Verbal Reasoning',
      description: 'Logic and reasoning using shapes, patterns, and diagrams.'
    }
  ];
}
