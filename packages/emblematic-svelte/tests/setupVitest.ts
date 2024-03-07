import { expect } from 'vitest'
import '@testing-library/jest-dom/vitest'

// @ts-expect-error no types
import htmlSerializer from 'jest-serializer-html'

expect.addSnapshotSerializer(htmlSerializer)
