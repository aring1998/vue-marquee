export type MarqueeSize = 'small' | 'large';

export declare class AringVueMarquee {
  /** Text content */
  text: string;

  /** Text color */
  color: string;

  /** Rolling time, unit:ms */
  rollTime: number;

  /** Cursor when mouse over */
  cursor: string;

  /** Size of marquee */
  size: MarqueeSize;

  /** Allow stop rolling on mouse over */
  mouseOver: MarqueeSize;

  /** Stop the marquee rolling */
  stopRoll(): void;

  /** Continue the marquee rolling */
  continueRoll(): void;

  /** Reset marquee */
  reset(): void;
}
