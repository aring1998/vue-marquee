export type MarqueeSize = 'small' | 'large';
export type MarqueeDirectiton = 'up' | 'right' | 'down' | 'left';

export declare class AringVueMarquee {
  /** roll speed */
  speed: number;

  /** Rolling direction of marquee */
  direction: MarqueeDirectiton;

  /** Rolling interval, unit: ms */
  delayTime: number;

  /** Color of Roll content */
  color: string;

  /** Cursor when mouse over */
  cursor: string;

  /** Size of marquee */
  size: MarqueeSize;

  /** Allow stop rolling on mouse over */
  mouseover: MarqueeSize;

  /** Stop the marquee rolling */
  stopRoll(): void;

  /** Continue the marquee rolling */
  continueRoll(): void;

  /** Reset marquee */
  reset(): void;
}
