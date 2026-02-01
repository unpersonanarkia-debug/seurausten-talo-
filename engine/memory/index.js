import cases from "./cases.json";

/**
 * Finds historical resonance patterns matching the current evaluated state.
 * This module does NOT judge, predict, or warn.
 * It mirrors similarities across time and context.
 */

/**
 * @param {Object} evaluationResult - Output from evaluator.js
 * @param {string} evaluationResult.weakestLink
 * @param {boolean} evaluationResult.silentDecay
 * @param {boolean} evaluationResult.rhythmMismatch
 * @param {number} evaluationResult.lifecyclePhase
 * @param {Array<string>} evaluationResult.resonanceTags
 *
 * @returns {Array<Object>} matched historical cases
 */
export function findHistoricalResonance(evaluationResult) {
  if (!evaluationResult) return [];

  return cases.filter((historicalCase) => {
    return matchesWeakestLink(historicalCase, evaluationResult) &&
           matchesSilentDecay(historicalCase, evaluationResult) &&
           matchesRhythm(historicalCase, evaluationResult) &&
           matchesTags(historicalCase, evaluationResult);
  });
}

/* -------------------- matching rules -------------------- */

function matchesWeakestLink(hCase, evalResult) {
  return (
    !hCase.triggeringPattern.weakestLink ||
    hCase.triggeringPattern.weakestLink === evalResult.weakestLink
  );
}

function matchesSilentDecay(hCase, evalResult) {
  return (
    hCase.triggeringPattern.silentDecay === false ||
    hCase.triggeringPattern.silentDecay === evalResult.silentDecay
  );
}

function matchesRhythm(hCase, evalResult) {
  return (
    hCase.triggeringPattern.rhythmMismatch === false ||
    hCase.triggeringPattern.rhythmMismatch === evalResult.rhythmMismatch
  );
}

function matchesTags(hCase, evalResult) {
  if (!hCase.resonanceTags || hCase.resonanceTags.length === 0) return true;
  if (!evalResult.resonanceTags) return true;

  return hCase.resonanceTags.some(tag =>
    evalResult.resonanceTags.includes(tag)
  );
}

