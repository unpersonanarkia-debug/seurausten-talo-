/**
 * Seurausten Talo – Evaluator
 * ---------------------------
 * Tämä moduuli arvioi päätöksen rakenteellisen kestävyyden
 * elinkaaren, heikoimman lenkin, heiluri-resonaation ja Sammaksen kautta.
 *
 * Ei sisällä historiallisia analogeja eikä tulkintaa.
 * Sama syöte → sama tulos.
 */

/* =========================
   1. ELINKAARI
   ========================= */

function evaluateLifecycleRisk(phase) {
  const riskByPhase = {
    1: 0.2, // päätös
    2: 0.3, // vaikutus
    3: 0.5, // seuraukset
    4: 0.6, // sopeutuminen
    5: 0.8, // kertautuminen
    6: 0.9  // normiksi lukkiutuminen
  };

  return riskByPhase[phase] ?? 0.5;
}

/* =========================
   2. HEIKOIN LENKKI
   ========================= */

function findWeakestLink(capitals) {
  let weakest = { name: null, value: 1 };

  for (const [name, value] of Object.entries(capitals)) {
    if (value < weakest.value) {
      weakest = { name, value };
    }
  }

  return weakest;
}

function weakestLinkViolation(weakest, threshold) {
  return weakest.value < threshold;
}

/* =========================
   3. HEILURI & RESONANSSI
   ========================= */

function evaluatePendulum(pendulum) {
  const {
    amplitude = 0,
    frequency = 0,
    damping = 0,
    resonance = false
  } = pendulum;

  let energy = amplitude * frequency;

  if (resonance) {
    energy *= 1.5;
  }

  energy *= (1 - damping);

  return Math.max(0, energy);
}

/* =========================
   4. SAMMAS (AKSELI)
   ========================= */

function evaluateSammas(stability, pendulumEnergy) {
  if (stability <= 0) return Infinity;
  return pendulumEnergy / stability;
}

/* =========================
   5. TEMPO & HILJAINEN RAPAUTUMINEN
   ========================= */

function tempoMismatch(decisionSpeed, recoverySpeed) {
  return decisionSpeed > recoverySpeed;
}

/* =========================
   6. PÄÄARVIOINTI
   ========================= */

function evaluateDecision(state) {
  const {
    lifecycle_phase,
    capitals,
    weakest_link_threshold = 0.5,
    pendulum,
    sammas,
    tempo
  } = state;

  // Elinkaari
  const lifecycleRisk = evaluateLifecycleRisk(lifecycle_phase);

  // Heikoin lenkki
  const weakest = findWeakestLink(capitals);
  const blocked = weakestLinkViolation(
    weakest,
    weakest_link_threshold
  );

  // Heiluri
  const pendulumEnergy = evaluatePendulum(pendulum);

  // Sammas
  const sammasLoad = evaluateSammas(
    sammas?.stability ?? 1,
    pendulumEnergy
  );

  // Tempo
  const silentDecay = tempoMismatch(
    tempo?.decision_speed ?? 0,
    tempo?.recovery_speed ?? 1
  );

  // Päätelmä (ei tulkinta, vain tila)
  let verdict = "STABLE";

  if (blocked) {
    verdict = "BLOCKED";
  } else if (sammasLoad > 1) {
    verdict = "UNSTABLE";
  } else if (silentDecay) {
    verdict = "DECAYING";
  }

  return {
    verdict,
    lifecycle: {
      phase: lifecycle_phase,
      risk: lifecycleRisk
    },
    weakest_link: weakest,
    pendulum: {
      energy: pendulumEnergy,
      resonance: pendulum?.resonance ?? false
    },
    sammas: {
      stability: sammas?.stability ?? 1,
      load: sammasLoad
    },
    tempo: {
      silent_decay: silentDecay
    }
  };
}

/* =========================
   7. EXPORT
   ========================= */

module.exports = {
  evaluateDecision
};
