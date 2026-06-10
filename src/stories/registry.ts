import type { ComponentType } from "react"

import {
  projectData as tutorialGeneratorData,
  TutorialGeneratorStory,
} from "@/stories/tutorial-generator"
import {
  projectData as zoteroExplorerData,
  ZoteroExplorerStory,
} from "@/stories/zotero-explorer"
import {
  projectData as speedrunAnalysisData,
  SpeedrunAnalysisStory
} from "@/stories/speedrun-analysis"
import type { StoryMetadata } from "@/components/story-layout"

export type StoryEntry = {
  Component: ComponentType
  metadata: StoryMetadata
  path: `/stories/${string}`
  slug: string
}

function createStoryEntry(
  metadata: StoryMetadata,
  Component: ComponentType
): StoryEntry {
  return {
    Component,
    metadata,
    path: `/stories/${metadata.projectId}`,
    slug: metadata.projectId,
  }
}

export const stories = [
  createStoryEntry(tutorialGeneratorData, TutorialGeneratorStory),
  createStoryEntry(zoteroExplorerData, ZoteroExplorerStory),
  createStoryEntry(speedrunAnalysisData, SpeedrunAnalysisStory)
]

export const storyRoutes = stories.map(({ path, slug }) => ({ path, slug }))

export function getStoryBySlug(slug: string) {
  return stories.find((story) => story.slug === slug)
}

export function getStoryPath(slug: string) {
  return getStoryBySlug(slug)?.path
}
