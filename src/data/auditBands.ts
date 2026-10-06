export type AuditBand = {
  /** Lowest total score that lands in this band. */
  min: number;
  range: string;
  title: string;
  summary: string;
  fixFirst: string;
  pitch: string;
  cta: string;
};

/** Ordered from the highest band down; the first band whose `min` the total reaches wins. */
export const AUDIT_BANDS: AuditBand[] = [
  {
    min: 10,
    range: "Score 10 to 12",
    title: "The message is doing its job.",
    summary:
      "Whatever isn't working is more likely delivery than definition. Look at frequency and consistency next, not at what you're saying. This is a rare score.",
    fixFirst: "Take the single question you scored lowest on and close that one gap. Nothing else here is urgent.",
    pitch:
      "Almost nobody scores here. If your message is this straight, we'd like to know how you got it there and how you keep it that way. That's a conversation we'd take any day, and there is nothing we would be selling you on it.",
    cta: "Tell us how you did it",
  },
  {
    min: 6,
    range: "Score 6 to 9",
    title: "You know what you are. It hasn't been written down in a way that travels.",
    summary:
      "The most common score and the most frustrating one, because everything feels nearly right. The firm has a real identity and it lives in a few people's heads. It just doesn't survive being repeated by anybody else.",
    fixFirst:
      "Question 2. Settle the one sentence, then say it to three partners over the next month and listen for whether it comes back.",
    pitch:
      "This is the most fixable score on the page. What you are is already there. It has just never been written down in a way that works without you in the room. Thirty minutes, no deck, and we'll tell you what we would look at first.",
    cta: "Start a conversation",
  },
  {
    min: 3,
    range: "Score 3 to 5",
    title: "The firm runs on somebody explaining it in person.",
    summary:
      "Usually a founder or a principal, and it works, which is exactly why it's hard to see as a problem. It stops working at the point where growth needs people who aren't that person.",
    fixFirst: "Question 1. Until three people give the same answer, nothing you publish will accumulate.",
    pitch:
      "This is the score where the founder is still the product. Easier to deal with before that becomes the ceiling than after. Thirty minutes, no deck, and if we're not the right people for it you'll hear that on the same call.",
    cta: "Start a conversation",
  },
  {
    min: 0,
    range: "Score 0 to 2",
    title: "Nobody has decided yet.",
    summary:
      "That isn't a criticism. Plenty of good firms are built on relationships and reputation and never needed to. It becomes a problem at the point where rate stops covering the difference and growth has to be taken from somebody else.",
    fixFirst:
      "Question 4. Deciding what you're not for is faster than deciding what you are, and it gets you most of the way there.",
    pitch:
      "You don't need a campaign. You need one decision about what the firm is for, and everything downstream gets easier the moment it exists. That is a shorter conversation than you would expect.",
    cta: "Start a conversation",
  },
];
