/**
 * Represents a multiplayer study game.
 */
export interface MultiplayerStudyGame {
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
 * Asynchronously retrieves the list of multiplayer study games.
 *
 * @returns A promise that resolves to an array of MultiplayerStudyGame objects.
 */
export async function getMultiplayerStudyGames(): Promise<MultiplayerStudyGame[]> {
  // TODO: Implement this by calling an API or reading from a data source.
  return [
    {
      name: 'Math Quiz',
      description: 'A quiz game for math.',
      url: 'https://www.example.com/math-quiz'
    },
    {
      name: 'English Vocabulary',
      description: 'A vocabulary game for English.',
      url: 'https://www.example.com/english-vocabulary'
    }
  ];
}
