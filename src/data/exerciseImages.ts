import sitToStand from "@/assets/exercises/sit-to-stand.png";
import sidePlank from "@/assets/exercises/side-plank-from-knees.png";
import birdDog from "@/assets/exercises/bird-dog-new.png";
import bridge from "@/assets/exercises/bridge.png";
import abdominalBrace from "@/assets/exercises/abdominal-brace-with-breathing.png";
import isometricWristExt from "@/assets/exercises/isometric-wrist-extension.png";
import bandRow from "@/assets/exercises/band-row.png";
import hipExtensionBand from "@/assets/exercises/hip-extension-band.png";
import towelSqueeze from "@/assets/exercises/towel-squeeze.png";
import chinTuckLift from "@/assets/exercises/chin-tuck-with-head-lift.png";
import chinTuck from "@/assets/exercises/chin-tuck.png";

const exerciseImages: Record<string, string> = {
  "sit-to-stand": sitToStand,
  "side-plank": sidePlank,
  "bird-dog": birdDog,
  "bridge": bridge,
  "abdominal-brace": abdominalBrace,
  "isometric-wrist-ext": isometricWristExt,
  "wrist-extension": isometricWristExt,
  "band-row": bandRow,
  "hip-extension-band": hipExtensionBand,
  "towel-squeeze": towelSqueeze,
  "chin-tuck-lift": chinTuckLift,
  "chin-tuck": chinTuck,
};

export default exerciseImages;
