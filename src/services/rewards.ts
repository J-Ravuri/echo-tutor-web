/**
 * Represents a reward.
 */
export interface Reward {
  /**
   * The name of the reward.
   */
  name: string;
  /**
   * A brief description of the reward.
   */
  description: string;
  /**
   * The image of the reward.
   */
  image: string;
}

/**
 * Asynchronously retrieves the list of available rewards.
 *
 * @returns A promise that resolves to an array of Reward objects.
 */
export async function getRewards(): Promise<Reward[]> {
  // TODO: Implement this by calling an API or reading from a data source.
  return [
    {
      name: 'Bronze Badge',
      description: 'Achieved 100 points',
      image: '/images/bronze-badge.png'
    },
    {
      name: 'Silver Badge',
      description: 'Achieved 500 points',
      image: '/images/silver-badge.png'
    },
    {
      name: 'Gold Badge',
      description: 'Achieved 1000 points',
      image: '/images/gold-badge.png'
    }
  ];
}
