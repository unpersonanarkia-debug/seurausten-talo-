// engine/interpreter.js

/**
 * Interpreter
 * ----------
 * Kääntää evaluatorin numeerisen ja rakenteellisen tuloksen
 * institutionaalisesti ymmärrettäväksi tilannekuvaksi.
 */

export function interpret(evaluation, context = "valtio") {
  const messages = [];
  const locks = [];
  let systemState = "vakaa";

  // 1. Huonelukot
  for (const [room, status] of Object.entries(evaluation.rooms)) {
    if (status.locked) {
      locks.push(room);
      messages.push(
        `Huone ${room} (${status.name}) on lukossa: ${status.reason}`
      );
    }
  }

  // 2. Hiljainen rapautuminen
  if (evaluation.silentDecay.active) {
    systemState = "hiljainen_rapautuminen";
    messages.push(
      "Järjestelmä ei ole kriisissä, mutta sen elinvoima heikkenee hitaasti. Tämä tila on institutionaalisesti vaarallisin."
    );
  }

  // 3. Kaaos
  if (evaluation.chaos.active) {
    systemState = "kaaos";
    messages.push(
      "Tahti on irronnut kantokyvystä. Järjestelmä pakotetaan palaamaan rajoihin kriisin kautta."
    );
  }

  // 4. Heikoin lenkki
  if (evaluation.weakestLink) {
    messages.push(
      `Heikoin lenkki sijaitsee pääomassa: ${evaluation.weakestLink}. Tätä ei voi kompensoida muilla vahvuuksilla.`
    );
  }

  // 5. Aikajanan tulkinta
  const timelineInterpretation = {
    "6kk": evaluation.timeline["6m"] > 0.7
      ? "Lyhyen aikavälin varoitusmerkkejä on jo näkyvissä."
      : "Lyhyellä aikavälillä järjestelmä näyttää vielä toimivalta.",

    "2v": evaluation.timeline["2y"] > 0.7
      ? "Keskipitkällä aikavälillä järjestelmä ajautuu rakenteelliseen kriisiin."
      : "Keskipitkällä aikavälillä korjaus on vielä mahdollinen.",

    "10v": evaluation.timeline["10y"] > 0.7
      ? "Pitkällä aikavälillä tämä kehitys normalisoituu ja muuttuu normiksi."
      : "Pitkällä aikavälillä suunnanmuutos estää normien rapautumisen."
  };

  // 6. Ydintuomio (pakottava lause)
  let coreJudgement;
  if (systemState === "kaaos") {
    coreJudgement =
      "Korjaus tapahtuu nyt kriisin kautta. Ennaltaehkäisevä vaihe on ohitettu.";
  } else if (systemState === "hiljainen_rapautuminen") {
    coreJudgement =
      "Mikään ei pakota muutokseen – ja juuri siksi muutos jää tekemättä.";
  } else if (locks.length > 0) {
    coreJudgement =
      "Ette voi edetä ennen kuin rajat ja seuranta on palautettu.";
  } else {
    coreJudgement =
      "Järjestelmä on vakaa, mutta vain niin kauan kuin tahti pysyy kantokyvyn sisällä.";
  }

  return {
    context,
    systemState,
    locks,
    messages,
    timelineInterpretation,
    coreJudgement
  };
}
