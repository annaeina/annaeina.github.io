export interface ResearchAuthor {
  name: string;
  url?: string;
  me?: boolean;
}

export interface ResearchLink {
  label: string;
  url: string;
}

export interface ResearchEntry {
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  url?: string;
  authors: ResearchAuthor[];
  venue: string;
  links?: ResearchLink[];
}

export const research: ResearchEntry[] = [
  {
    image: "RetVDR-revise.png",
    imageAlt:
      "Comparison of pruning, uniform quantization, and RetVDQ's retrieval-aware variable-depth quantization",
    imageWidth: 1254,
    imageHeight: 1254,
    title:
      "RetVDQ: Retrieval-Aware Variable-Depth Residual Quantization for Visual Document Retrieval",
    url: "https://openreview.net/forum?id=kUJHsGLsyH&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2027%2FConference%2FAuthors%23your-submissions)",
    authors: [
      { name: "Linglin He", me: true },
      { name: "Haokun Wen" },
      { name: "Haocheng Dou" },
      { name: "Na Zheng" },
      { name: "Linyi Yang" },
      { name: "Xuemeng Song", url: "https://xuemengsong.github.io/" },
    ],
    venue: "ICLR 2027 · Under Review",
    links: [
      {
        label: "OpenReview",
        url: "https://openreview.net/forum?id=kUJHsGLsyH&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2027%2FConference%2FAuthors%23your-submissions)",
      },
    ],
  },
  {
    image: "voice-padding.png",
    imageAlt:
      "Microphone padding strategies for a varying number of input microphones",
    imageWidth: 1348,
    imageHeight: 742,
    title:
      "A Microphone Padding Approach for Speech Separation with Varying Number of Microphones",
    authors: [
      { name: "Fulin Wu" },
      { name: "Linglin He", me: true },
      { name: "Shulin He" },
      { name: "Zhong-Qiu Wang", url: "https://zqwang7.github.io/" },
    ],
    venue: "NCMMSC 2026 · Oral Presentation",
  },
];
