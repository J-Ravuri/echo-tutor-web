/**
 * Represents a concentration game.
 */
export interface ConcentrationGame {
  /**
   * The name of the game.
   */
  name: string;
  /**
   * A brief description of the game.
   */
  description: string;
  /**
   * The URL of the game.
   */
  url: string;
}

/**
 * Asynchronously retrieves the list of concentration games.
 *
 * @returns A promise that resolves to an array of ConcentrationGame objects.
 */
export async function getConcentrationGames(): Promise<ConcentrationGame[]> {
  // TODO: Implement this by calling an API or reading from a data source.
  return [
    {
      name: 'Memory Match',
      description: 'Match pairs of cards.',
      url: 'https://www.example.com/memory-match'
    },
    {
      name: 'Spot the Difference',
      description: 'Find the differences between two images.',
      url: 'https://www.example.com/spot-the-difference'
    }
  ];
}
