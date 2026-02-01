// engine/memory/index.js

import cases from "./cases.json";

/**
 * Hakee historialliset resonanssit evaluatorin tulokselle
 */
export function findHistoricalResonance(evaluation) {
  return cases.filter((c) => {
    return (
      c.triggeringPattern.weakestLink === evaluation.weakestLink &&
      c.triggeringPattern.silentDecay === evaluation.silentDecay.active &&
      c.triggeringPattern.rhythmMismatch === evaluation.rhythmMismatch
    );
  });
}
