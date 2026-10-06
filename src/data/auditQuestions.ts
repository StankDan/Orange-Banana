export type AuditQuestion = {
  title: string;
  hint: string;
  /** Answer texts for a score of 0, 1 and 2. */
  options: [string, string, string];
  whyLabel: string;
  why: string;
  /** Badge colour before the question is answered. */
  badgeClass: string;
};

export const AUDIT_QUESTIONS: AuditQuestion[] = [
  {
    "title": "Ask three people in your firm to describe what you do, in one sentence, with no warning.",
    "hint": "Somebody in leadership, somebody who sells, and whoever sits closest to you. Whatever those roles happen to be called in your firm.",
    "options": [
      "Three different answers, and at least one of them surprises you.",
      "Roughly the same idea, in three different shapes.",
      "The same sentence, near enough that a client wouldn't notice the difference."
    ],
    "whyLabel": "Why this one is first",
    "why": "Five people describing one firm five ways isn't a discipline problem. It's what happens when nobody ever settled the answer, so everyone builds their own. Every other question here is downstream of this one.",
    "badgeClass": "bg-brand-orange"
  },
  {
    "title": "If there's one sentence you'd want partners to use when they describe you, do you know what it is, and do you use it yourself?",
    "hint": "Three things, really. Whether the sentence exists, whether you could say it out loud right now, and whether it's the one you actually use when you talk to them.",
    "options": [
      "There isn't one. It comes out differently every time you say it.",
      "You know what it should be, but it isn't what you actually say.",
      "You know it, you use it, and you've heard it come back from somebody else."
    ],
    "whyLabel": "Why it matters",
    "why": "Most new business arrives through a sentence you weren't present for. Somebody had to think of you, then repeat you to a third person, accurately, without you in the room to correct them. Firms tend to leave that sentence to chance and then wonder why the version that comes back is generic.",
    "badgeClass": "bg-brand-teal"
  },
  {
    "title": "Take your tagline, or the main message on your website. Cover your logo. Put a competitor's on it.",
    "hint": "Now read it as theirs. If their name sits on your line without anything feeling wrong, the line was never really about you.",
    "options": [
      "You don't have one, or nothing breaks. It reads perfectly well as theirs.",
      "Something feels slightly off, but you'd struggle to say what.",
      "It stops being true. The claim only works with your name on it."
    ],
    "whyLabel": "Why it matters",
    "why": "A sentence that works equally well for a competitor isn't doing any work for you. It's occupying the space where a real claim should be. This is the fastest test here and the one people argue with hardest.",
    "badgeClass": "bg-brand-terracotta"
  },
  {
    "title": "When the business is growing, do you still know who you say no to?",
    "hint": "Not the business you lose. The business you could take and choose not to. Easy to answer in a good year, harder when the pipeline is thin.",
    "options": [
      "Not really. If it comes in, you'll take a look at it.",
      "You know it internally, but it has never been said to anybody outside.",
      "You can name it, and the people who send you business can name it too."
    ],
    "whyLabel": "Why it matters",
    "why": "Appetite is the industry's own word for this and it's the same idea one level up. Whoever will look at anything gets sent everything, which means being sent a lot of things they were always going to lose. What you decline is what makes what you accept mean something.",
    "badgeClass": "bg-brand-dark"
  },
  {
    "title": "List everyone who has to understand what you do. Is there a message built for each of them?",
    "hint": "Clients. Partners. The markets you place with or the ones that back you. The people you're trying to hire. Rarely fewer than three, and they are not impressed by the same things.",
    "options": [
      "Everything you publish is written for one of them. The rest are left to work it out.",
      "You have material for more than one, but it reads like it came from different firms.",
      "The same argument for each of them, in the language each one already uses."
    ],
    "whyLabel": "Why it matters",
    "why": "Almost everyone in this industry is explaining themselves to more than one audience at once, and most write everything for the loudest one and hope the others work it out. The argument has to hold for each of them, and it has to be recognisably the same firm saying it.",
    "badgeClass": "bg-brand-orange"
  },
  {
    "title": "Open any document you send out. Is a single one of them branded, and is it obvious who it came from?",
    "hint": "A proposal, a submission, a renewal notice, an invoice, a report. Whatever left your office last week.",
    "options": [
      "None of them. Take the letterhead off and they could be from anywhere.",
      "One or two carry it. The rest are whatever the template did.",
      "Pick one at random and it is obviously yours, before anyone reads the name."
    ],
    "whyLabel": "Why it matters",
    "why": "These are the documents people actually read, with attention, at the moment they're deciding whether you were worth it. Most firms spend on a website nobody opens twice and treat everything else as admin. A brand isn't a logo. It's what somebody remembers when your name comes up, and the paperwork is doing more of that work than the homepage is.",
    "badgeClass": "bg-brand-teal"
  }
];
