import { findHistoricalResonance } from "./memory/index.js";

/**
 * Interpreter translates evaluator output + historical resonance
 * into human-readable, pedagogical insight.
 *
 * It does NOT:
 * - give recommendations
 * - issue warnings
 * - predict outcomes
 *
 * It DOES:
 * - mirror patterns
 * - contextualize risk
 * - preserve non-judgment
 */

/**
 * @param {Object} evaluationResult - output from evaluator.js
 * @returns {Object} interpreted result
 */
export function interpretEvaluation(evaluationResult) {
  const resonanceCases = findHistoricalResonance(evaluationResult);

  return {
    summary: buildSummary(evaluationResult),
    systemState: describeSystemState(evaluationResult),
    resonance: buildResonanceNarrative(resonanceCases),
    reflectionPrompt: buildReflectionPrompt(evaluationResult, resonanceCases)
  };
}

/* -------------------- narrative builders -------------------- */

function buildSummary(e) {
  if (e.silentDecay) {
    return "Järjestelmä toimii näkyvästi, mutta kantavat rakenteet heikkenevät hiljaisesti.";
  }

  if (e.chaosRisk) {
    return "Järjestelmässä on havaittavissa kiihtyvää epävakautta.";
  }

  return "Järjestelmä on toistaiseksi tasapainossa, mutta vaatii jatkuvaa läsnäoloa.";
}

function describeSystemState(e) {
  return {
    weakestLink: e.weakestLink,
    lifecyclePhase: e.lifecyclePhase,
    rhythm: e.rhythmMismatch ? "Ylitahti suhteessa palautumiskykyyn" : "Yhteensopiva sykli",
    recoverability: e.recoverabilityScore
  };
}

function buildResonanceNarrative(cases) {
  if (!cases || cases.length === 0) {
    return {
      detected: false,
      message: "Vastaavia rakenteellisia värähtelyjä ei löytynyt institutionaalisesta muistista."
    };
  }

  return {
    detected: true,
    message: "Nykytilanne resonoi aiemmin havaittujen rakenteellisten kehityskulkujen kanssa.",
    examples: cases.map(c => ({
      name: c.name,
      region: c.region,
      timeframe: c.timeframe,
      dominantPattern: c.triggeringPattern,
      observedOutcome: c.observedOutcome
    }))
  };
}

function buildReflectionPrompt(e, cases) {
  if (cases.length === 0) {
    return "Mitä tässä järjestelmässä kannattaa vaalia, jotta nykyinen tasapaino säilyy?";
  }

  return "Missä kohdin tämä järjestelmä tunnistaa itsensä näissä aiemmissa kehityskuluissa?";
}
