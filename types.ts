export interface GroundingChunk {
  web?: {
    uri?: string;
    title?: string;
  };
  maps?: {
    uri?: string;
    title?: string;
    placeAnswerSources?: {
        reviewSnippets?: {
            reviewText?: string;
            author?: string;
        }[]
    }
  }
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  searchEntryPoint?: {
    renderedContent?: string;
  };
}

export interface SearchResult {
  text: string;
  groundingMetadata?: GroundingMetadata;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export type AspectRatio = '1:1' | '2:3' | '3:2' | '3:4' | '4:3' | '9:16' | '16:9' | '21:9';
export type ImageSize = '1K' | '2K' | '4K';
export type VideoResolution = '720p' | '1080p';

// Helper for UI states
export type AppMode = 'search' | 'chat' | 'image' | 'video' | 'audio';

export interface SearchState {
  query: string;
  isLoading: boolean;
  data: SearchResult | null;
  error: string | null;
  hasSearched: boolean;
}