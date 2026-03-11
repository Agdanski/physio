export interface Exercise {
  name: string;
  why: string;
  instructions: string[];
  dose: string;
  keyCues?: string[];
  progression?: string;
  regression?: string;
  painRule?: string;
  stopIf?: string;
  important?: string;
  imageKey: string;
}

export interface Program {
  id: string;
  condition: string;
  goal: string;
  description: string;
  bodyRegion: BodyRegion;
  symptoms: string[];
  exercises: Exercise[];
  urgentSigns?: string[];
  programAudit: string;
}

export type BodyRegion =
  | "neck"
  | "shoulder"
  | "elbow-wrist-hand"
  | "lower-back"
  | "hip-groin"
  | "thigh"
  | "knee"
  | "lower-leg"
  | "ankle-foot";

export const bodyRegionLabels: Record<BodyRegion, string> = {
  neck: "Neck",
  shoulder: "Shoulder",
  "elbow-wrist-hand": "Elbow, Wrist & Hand",
  "lower-back": "Lower Back",
  "hip-groin": "Hip & Groin",
  thigh: "Thigh",
  knee: "Knee",
  "lower-leg": "Lower Leg",
  "ankle-foot": "Ankle & Foot",
};

export const programs: Program[] = [
  // 1. Non-specific low back pain
  {
    id: "low-back-pain",
    condition: "Non-Specific Low Back Pain",
    goal: "Improve trunk endurance, hip strength, and movement tolerance.",
    description: "One of the most common orthopaedic presentations. Guidelines support exercise and progressive activity rather than rest alone.",
    bodyRegion: "lower-back",
    symptoms: ["general low back ache", "stiffness in the morning", "pain with prolonged sitting or standing", "difficulty bending"],
    exercises: [
      {
        name: "Abdominal Brace with Breathing",
        why: "Builds low-level trunk stability without excessive spinal load.",
        instructions: [
          "Lie on your back with knees bent and feet flat.",
          "Breathe in normally.",
          "As you breathe out, gently tighten your lower abdominal wall as if bracing for a light poke.",
          "Keep your ribs, pelvis, and buttocks relaxed.",
          "Hold the brace while taking 2 to 3 small breaths.",
          "Fully relax."
        ],
        dose: "2–3 sets × 8–10 reps, once daily",
        keyCues: ["Use about 20–30% effort, not a maximal squeeze.", "Do not flatten the back hard into the floor."],
        stopIf: "It triggers sharp back pain or leg symptoms.",
        imageKey: "abdominal-brace"
      },
      {
        name: "Bridge",
        why: "Strengthens glutes and posterior chain to reduce repeated lumbar overloading.",
        instructions: [
          "Lie on your back with knees bent.",
          "Tighten your lower abdomen gently.",
          "Squeeze your glutes.",
          "Lift your hips until shoulders, hips, and knees form a straight line.",
          "Pause 2 to 3 seconds.",
          "Lower slowly."
        ],
        dose: "3 sets × 8–12 reps, every other day",
        keyCues: ["Lift with the hips, not the low back.", "Do not over-arch at the top."],
        progression: "Longer hold (5 sec), then single-leg bridge only if pain-free and controlled.",
        imageKey: "bridge"
      },
      {
        name: "Bird Dog",
        why: "Improves trunk control and anti-rotation stability.",
        instructions: [
          "Start on hands and knees.",
          "Brace lightly through the abdomen.",
          "Reach one leg back while reaching the opposite arm forward.",
          "Keep pelvis level and spine still.",
          "Hold 3 to 5 seconds.",
          "Return and switch sides."
        ],
        dose: "2–3 sets × 6–8 reps per side, every other day",
        keyCues: ["Think 'long,' not 'high.'", "Do not rotate or twist."],
        regression: "Move only the leg or only the arm.",
        imageKey: "bird-dog"
      },
      {
        name: "Side Plank from Knees",
        why: "Improves lateral trunk endurance.",
        instructions: [
          "Lie on your side with knees bent.",
          "Prop on your lower elbow directly under your shoulder.",
          "Lift hips off the floor.",
          "Keep shoulders, hips, and knees in line.",
          "Hold 10 to 20 seconds.",
          "Lower with control."
        ],
        dose: "2–3 sets × 3–5 holds per side, every other day",
        progression: "Increase hold toward 30 seconds, then progress to full side plank from feet.",
        imageKey: "side-plank"
      },
      {
        name: "Sit-to-Stand",
        why: "Restores functional strength and tolerance for daily activity.",
        instructions: [
          "Sit near the front of a chair.",
          "Feet hip-width apart.",
          "Lean trunk forward slightly.",
          "Stand up without pushing off with the hands if possible.",
          "Sit down slowly."
        ],
        dose: "3 sets × 8–15 reps, every other day",
        painRule: "Mild discomfort is acceptable. Symptoms should settle back to baseline within 24 hours.",
        imageKey: "sit-to-stand"
      }
    ],
    programAudit: "Consistent with low back pain exercise guideline principles emphasizing exercise, trunk training, and progressive activity."
  },

  // 2. Rotator Cuff–Related Shoulder Pain
  {
    id: "rcrsp",
    condition: "Rotator Cuff–Related Shoulder Pain / Subacromial Pain",
    goal: "Improve rotator cuff and scapular strength, reduce pain with elevation, and restore reaching and lifting tolerance.",
    description: "Modern umbrella term that includes many cases previously labeled 'shoulder impingement.' Exercise therapy is first-line for subacromial/impingement-type shoulder pain.",
    bodyRegion: "shoulder",
    symptoms: ["pain lifting arm overhead", "pain reaching behind back", "shoulder ache at night", "pain with pushing or lifting"],
    exercises: [
      {
        name: "Isometric External Rotation at Wall",
        why: "Often useful when the shoulder is irritable, because it loads the cuff without much movement.",
        instructions: [
          "Stand with elbow bent to 90° and tucked at your side.",
          "Place the back of your hand against a wall or door frame.",
          "Gently push outward without moving the arm.",
          "Hold 20 to 30 seconds.",
          "Relax."
        ],
        dose: "4–5 holds, once or twice daily",
        painRule: "Aim for tolerable discomfort only. Pain should not spike afterward.",
        imageKey: "isometric-ext-rotation"
      },
      {
        name: "Band External Rotation",
        why: "Strengthens the rotator cuff dynamically.",
        instructions: [
          "Attach a band at elbow height.",
          "Stand sideways to the anchor.",
          "Keep a towel or your elbow lightly against your side.",
          "Rotate the forearm outward.",
          "Return slowly."
        ],
        dose: "3 sets × 10–15 reps, every other day",
        keyCues: ["Elbow stays by the side.", "Shoulder stays down, not shrugged."],
        imageKey: "band-ext-rotation"
      },
      {
        name: "Scaption Raise",
        why: "A common strengthening pattern for impingement-type and rotator cuff–related pain.",
        instructions: [
          "Hold a light weight.",
          "Raise the arm about 30° forward from your side.",
          "Keep the thumb up or neutral.",
          "Lift only to a tolerable height, often shoulder height or below at first.",
          "Lower slowly."
        ],
        dose: "2–3 sets × 8–12 reps, every other day",
        keyCues: ["Stay below painful range at first."],
        imageKey: "scaption-raise"
      },
      {
        name: "Row with Band",
        why: "Improves scapular support and posterior shoulder control.",
        instructions: [
          "Attach a band at chest height.",
          "Pull elbows back close to the body.",
          "Gently squeeze shoulder blades together.",
          "Return slowly."
        ],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "band-row"
      },
      {
        name: "Wall Push-Up Plus",
        why: "Helps serratus anterior and upward-rotation mechanics.",
        instructions: [
          "Stand facing a wall with hands on the wall.",
          "Perform a wall push-up.",
          "At the top, push slightly farther so the shoulder blades glide forward.",
          "Return with control."
        ],
        dose: "2–3 sets × 10–15 reps, every other day",
        imageKey: "wall-pushup-plus"
      },
      {
        name: "Codman Pendulum",
        why: "Gentle movement to reduce stiffness and pain in the early/irritable phase.",
        instructions: [
          "Lean over a table, supporting yourself with the uninvolved arm.",
          "Let the affected arm hang freely.",
          "Use your torso to swing the arm in a clockwise circle.",
          "Repeat in a counter-clockwise circle."
        ],
        dose: "50 reps each direction, twice daily",
        keyCues: ["Let gravity do the work — keep the arm relaxed.", "Do not actively lift the arm."],
        imageKey: "pendulum"
      },
      {
        name: "YTWL Scapular Depression",
        why: "Strengthens scapular stabilisers through multiple planes of movement.",
        instructions: [
          "Stand with straight arms raised above your head in a 'Y' position.",
          "Squeeze shoulder blades together and downward.",
          "Lower arms to shoulder level into a 'T' position.",
          "Bend elbows so fingers point up, making a 'W'.",
          "Lower elbows to your sides to form an 'L' and squeeze."
        ],
        dose: "3 sets × 10 reps, twice daily",
        keyCues: ["Hold each position 1–2 seconds.", "Keep shoulder blades squeezed throughout."],
        imageKey: "ytwl-scapular"
      },
      {
        name: "Glenohumeral Internal Rotation Stretch",
        why: "Restores internal rotation range, often limited in impingement presentations.",
        instructions: [
          "Sit with good posture.",
          "Place the affected arm behind your back and reach toward the opposite hip.",
          "Using the unaffected arm, gently pull the wrist further toward the opposite hip.",
          "Pull gently to the point of tightness — stop if you feel sharp pain."
        ],
        dose: "10 reps, once per hour or as directed",
        keyCues: ["Each pull should be slow and controlled.", "A stretch should be felt in the shoulder."],
        imageKey: "gh-internal-rotation"
      },
      {
        name: "Corner Pectoral Stretch",
        why: "Opens the chest and anterior shoulder, counteracting forward shoulder posture.",
        instructions: [
          "Stand facing a corner with forearms on each wall, elbows at shoulder height.",
          "Lean gently into the corner until a stretch is felt across the chest.",
          "Hold 20–30 seconds.",
          "Return to start."
        ],
        dose: "3–5 holds, twice daily",
        keyCues: ["Keep elbows at or below shoulder height.", "Do not arch the lower back."],
        imageKey: "corner-pec-stretch"
      },
      {
        name: "Brugger with Band",
        why: "Promotes scapular retraction and posterior chain activation to counteract impingement mechanics.",
        instructions: [
          "Sit or stand with an elastic band wrapped around your palms.",
          "Begin with arms at your side, elbows bent, forearms forward.",
          "Move hands apart to stretch the band while rotating palms out.",
          "Straighten arms and pinch shoulder blades together as hands move behind hips.",
          "Return to start."
        ],
        dose: "3 sets × 10 reps, daily",
        imageKey: "brugger-band"
      }
    ],
    programAudit: "Consistent with modern RCRSP/subacromial pain guidance using exercise as first-line care."
  },

  // 3. Rotator Cuff Tear
  {
    id: "rc-tear",
    condition: "Rotator Cuff Tear",
    goal: "Maintain or improve shoulder function, rebuild tolerable strength, and support daily reaching and lifting within safe limits.",
    description: "For symptomatic small to medium full-thickness rotator cuff tears, both physical therapy and operative treatment can improve outcomes. Tear size and muscle changes can progress over time with nonoperative care.",
    bodyRegion: "shoulder",
    symptoms: ["weakness lifting arm", "pain at rest or at night", "difficulty reaching overhead", "loss of strength with rotation"],
    exercises: [
      {
        name: "Assisted Shoulder Flexion with Stick",
        why: "Helps maintain elevation range without requiring full active cuff strength.",
        instructions: [
          "Lie on your back holding a stick or cane with both hands.",
          "Use the unaffected arm to help lift the affected arm overhead.",
          "Go only into a tolerable range.",
          "Return slowly."
        ],
        dose: "2–3 sets × 8–12 reps, daily",
        imageKey: "assisted-flexion-stick"
      },
      {
        name: "Isometric External Rotation at Wall",
        why: "Low-motion cuff loading can be a good starting point in a painful tear presentation.",
        instructions: [
          "Stand with elbow bent to 90° and tucked at your side.",
          "Place the back of the hand against a wall.",
          "Gently press outward without moving the arm.",
          "Hold 10 to 20 seconds.",
          "Relax."
        ],
        dose: "4–5 holds, once daily",
        imageKey: "isometric-ext-rotation"
      },
      {
        name: "Isometric Abduction at Wall",
        why: "Allows some deltoid/cuff loading without repeated painful overhead motion.",
        instructions: [
          "Stand side-on beside a wall.",
          "Keep the elbow bent and arm at your side.",
          "Press the outside of the upper arm gently into the wall.",
          "Do not let the arm move.",
          "Hold 10 to 20 seconds."
        ],
        dose: "4–5 holds, once daily",
        imageKey: "isometric-abduction"
      },
      {
        name: "Band Row",
        why: "Helps scapular control and posterior shoulder support, which can improve function even when the cuff is torn.",
        instructions: [
          "Attach a band at chest height.",
          "Pull elbows backward close to your body.",
          "Gently squeeze shoulder blades together.",
          "Return slowly."
        ],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "band-row"
      },
      {
        name: "Scaption to Tolerated Range",
        why: "Helps rebuild functional elevation carefully, staying within a range that does not sharply provoke symptoms.",
        instructions: [
          "Hold no weight or a very light weight.",
          "Raise the arm in the scapular plane, about 30° forward from your side.",
          "Lift only as high as you can without a painful shrug or major compensation.",
          "Lower slowly."
        ],
        dose: "2–3 sets × 6–10 reps, every other day",
        important: "Marked weakness, sudden loss of active elevation, traumatic onset, or inability to lift the arm after injury warrants medical assessment.",
        imageKey: "scaption-raise"
      },
      {
        name: "YTWL Scapular Depression",
        why: "Strengthens scapular stabilisers through multiple planes, supporting shoulder function even with a torn cuff.",
        instructions: [
          "Stand with straight arms raised above your head in a 'Y' position.",
          "Squeeze shoulder blades together and downward.",
          "Lower arms to shoulder level into a 'T' position.",
          "Bend elbows so fingers point up, making a 'W'.",
          "Lower elbows to your sides to form an 'L' and squeeze."
        ],
        dose: "3 sets × 10 reps, twice daily",
        keyCues: ["Hold each position 1–2 seconds.", "Keep shoulder blades squeezed throughout."],
        imageKey: "ytwl-scapular"
      },
      {
        name: "Glenohumeral Internal Rotation Stretch",
        why: "Restores internal rotation range that is often restricted with rotator cuff pathology.",
        instructions: [
          "Sit with good posture.",
          "Place the affected arm behind your back and reach toward the opposite hip.",
          "Using the unaffected arm, gently pull the wrist further toward the opposite hip.",
          "Pull gently to the point of tightness — stop if you feel sharp pain."
        ],
        dose: "10 reps, once per hour or as directed",
        keyCues: ["Each pull should be slow and controlled.", "A stretch should be felt in the shoulder."],
        imageKey: "gh-internal-rotation"
      },
      {
        name: "Corner Pectoral Stretch",
        why: "Opens the chest and anterior shoulder to improve posture and reduce compressive load on the cuff.",
        instructions: [
          "Stand facing a corner with forearms on each wall, elbows at shoulder height.",
          "Lean gently into the corner until a stretch is felt across the chest.",
          "Hold 20–30 seconds.",
          "Return to start."
        ],
        dose: "3–5 holds, twice daily",
        keyCues: ["Keep elbows at or below shoulder height.", "Do not arch the lower back."],
        imageKey: "corner-pec-stretch"
      },
      {
        name: "Eccentric Supraspinatus",
        why: "Targets the supraspinatus with a slow lowering phase to build tendon capacity.",
        instructions: [
          "Stand holding a weight with your arm outstretched at a 45° angle in front of you at shoulder level.",
          "Thumb should be pointing down.",
          "Slowly lower the weight to your thigh at a count of 4 seconds.",
          "Use your other arm to return the weight to the starting position."
        ],
        dose: "3 sets × 10 reps, daily",
        keyCues: ["Control the lowering — 4 seconds down.", "Only the lowering phase uses the affected arm."],
        imageKey: "eccentric-supraspinatus"
      },
      {
        name: "Eccentric Scapular Stabilizers",
        why: "Builds eccentric scapular control to support shoulder mechanics during reaching and lifting.",
        instructions: [
          "Lie on your side holding a weight with your arm outstretched toward the ceiling.",
          "Slowly lower the weight to the floor at a count of 4 seconds.",
          "Return your arm to the starting position by keeping it close to your body."
        ],
        dose: "3 sets × 10 reps, daily",
        keyCues: ["Focus on the slow lowering phase.", "Keep the movement controlled throughout."],
        imageKey: "eccentric-scapular-stabilizers"
      },
      {
        name: "Eccentric Teres Minor and Infraspinatus",
        why: "Eccentrically loads the external rotators to improve tendon resilience and rotational strength.",
        instructions: [
          "Lie on your side with arm on your rib cage, elbow bent to 90°, forearm pointing up.",
          "Slowly lower the weight toward the floor at a count of 4 seconds.",
          "Use your other arm to return the weight to the starting position."
        ],
        dose: "3 sets × 10 reps, daily",
        keyCues: ["Keep the elbow on your ribs throughout.", "Only the lowering phase uses the affected arm."],
        imageKey: "eccentric-teres-infraspinatus"
      }
    ],
    programAudit: "Consistent with AAOS guidance distinguishing tear management from tendinopathy and supporting PT as a valid option for many symptomatic tears."
  },

  // 4. Knee Osteoarthritis
  {
    id: "knee-oa",
    condition: "Knee Osteoarthritis",
    goal: "Improve quadriceps, hip strength, and functional capacity.",
    description: "Strengthening is a cornerstone treatment for knee OA and improves pain and function.",
    bodyRegion: "knee",
    symptoms: ["knee stiffness", "pain going up/down stairs", "knee swelling", "grinding or crepitus", "difficulty squatting"],
    exercises: [
      {
        name: "Seated Knee Extension",
        why: "Targets quadriceps directly.",
        instructions: ["Sit tall in a chair.", "Straighten one knee until the leg is level.", "Pause 1 to 2 seconds.", "Lower slowly."],
        dose: "3 sets × 10–15 reps per leg, every other day",
        progression: "Add ankle weight if tolerated.",
        imageKey: "seated-knee-ext"
      },
      {
        name: "Sit-to-Stand",
        why: "Functional quadriceps strengthening.",
        instructions: ["Sit near the edge of a chair.", "Feet under knees.", "Lean forward slightly.", "Stand up.", "Sit down slowly."],
        dose: "3 sets × 8–15 reps, every other day",
        regression: "Use hands lightly or use a higher chair.",
        imageKey: "sit-to-stand"
      },
      {
        name: "Straight Leg Raise",
        why: "Builds quadriceps strength with low knee motion.",
        instructions: ["Lie on your back.", "Bend one knee and keep the other straight.", "Tighten the front of the thigh on the straight leg.", "Lift to the height of the other knee.", "Lower slowly."],
        dose: "3 sets × 8–12 reps per side, every other day",
        imageKey: "straight-leg-raise"
      },
      {
        name: "Step-Up",
        why: "Adds functional quadriceps and hip work.",
        instructions: ["Use a low step.", "Step up with the affected leg.", "Fully straighten the knee and hip.", "Step down slowly."],
        dose: "2–3 sets × 8–12 reps per side, every other day",
        painRule: "Tolerable discomfort is okay. Joint swelling or pain flare lasting more than 24 hours means reduce load.",
        imageKey: "step-up"
      },
      {
        name: "Side-Lying Hip Abduction",
        why: "Improves hip support for knee mechanics.",
        instructions: ["Lie on your side with bottom knee bent for balance.", "Keep top leg straight.", "Lift the top leg about 20 to 30 cm.", "Lower slowly."],
        dose: "2–3 sets × 10–15 reps per side, every other day",
        keyCues: ["Toes point forward.", "Do not roll backward."],
        imageKey: "hip-abduction"
      }
    ],
    programAudit: "Consistent with OA guidance prioritizing strengthening and function."
  },

  // 5. Neck Pain
  {
    id: "neck-pain",
    condition: "Neck Pain",
    goal: "Improve deep neck flexor endurance, scapular support, and neck/shoulder loading tolerance.",
    description: "Exercise is a core part of guideline-based care for many forms of neck pain, especially when combined with progressive strengthening and endurance work.",
    bodyRegion: "neck",
    symptoms: ["neck stiffness", "headache from the neck", "pain turning the head", "tension across the shoulders", "pain with computer work"],
    exercises: [
      {
        name: "Chin Tuck",
        why: "Targets deep neck flexors and helps reduce forward-head loading.",
        instructions: ["Lie on your back or sit upright.", "Gently draw your chin straight backward, as if making a 'double chin.'", "Keep your eyes level.", "Hold 5 seconds.", "Relax."],
        dose: "2–3 sets × 8–12 reps, daily",
        keyCues: ["Do not nod up or down.", "The motion is small."],
        imageKey: "chin-tuck"
      },
      {
        name: "Chin Tuck with Head Lift",
        why: "Progresses deep neck flexor endurance.",
        instructions: ["Lie on your back with knees bent.", "Perform a chin tuck.", "Keeping the chin tucked, lift your head 1 to 2 cm off the floor.", "Hold 3 to 5 seconds.", "Lower slowly."],
        dose: "2 sets × 5–8 reps, every other day",
        regression: "Do chin tucks only.",
        imageKey: "chin-tuck-lift"
      },
      {
        name: "Band Row",
        why: "Supports scapular and upper thoracic posture.",
        instructions: ["Attach a band at chest height.", "Hold the ends with arms straight.", "Pull elbows back.", "Gently squeeze shoulder blades together.", "Return slowly."],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "band-row"
      },
      {
        name: "Wall Slide",
        why: "Improves shoulder blade upward rotation and upper-quarter control.",
        instructions: ["Stand with forearms on a wall.", "Keep light pressure into the wall.", "Slide arms upward as high as comfortable.", "Lower slowly."],
        dose: "2–3 sets × 8–12 reps, every other day",
        imageKey: "wall-slide"
      },
      {
        name: "Isometric Neck Extension",
        why: "Builds neck strength without large movement.",
        instructions: ["Sit upright.", "Place both hands on the back of your head.", "Press your head gently backward into your hands without moving.", "Hold 5 to 10 seconds.", "Relax."],
        dose: "5 holds, once daily",
        stopIf: "Arm numbness increases, dizziness appears, or symptoms worsen and stay aggravated beyond 24 hours.",
        imageKey: "isometric-neck-ext"
      }
    ],
    programAudit: "Consistent with neck-pain guideline recommendations favoring exercise and progressive strengthening/endurance."
  },

  // 6. Lumbar Radiculopathy / Sciatica
  {
    id: "sciatica",
    condition: "Lumbar Radiculopathy / Sciatica",
    goal: "Reduce nerve-root irritation sensitivity, restore trunk/hip support, and improve walking and function.",
    description: "Recent guideline reviews support conservative care first in most cases, with education, activity, and exercise commonly emphasized.",
    bodyRegion: "lower-back",
    symptoms: ["leg pain or tingling", "shooting pain down the leg", "numbness in the leg or foot", "pain worse with sitting", "low back pain with radiation"],
    exercises: [
      {
        name: "Prone Lying on Elbows",
        why: "Often helps people whose leg pain centralizes with extension-based positions.",
        instructions: ["Lie on your stomach.", "Prop onto your elbows.", "Let your low back relax into the position.", "Hold 30 to 60 seconds.", "Repeat."],
        dose: "5–6 holds, 1–3 times daily",
        important: "Continue only if leg pain moves upward out of the leg or becomes less intense. Stop if symptoms travel farther down the leg.",
        imageKey: "prone-on-elbows"
      },
      {
        name: "Standing Lumbar Extension",
        why: "Extension loading can help some radicular presentations.",
        instructions: ["Stand with feet shoulder-width apart.", "Place hands on hips.", "Gently bend backward.", "Return to neutral."],
        dose: "1–2 sets × 10 reps, 2–4 times daily",
        important: "Use only if symptoms improve or centralize.",
        imageKey: "standing-extension"
      },
      {
        name: "Sciatic Nerve Slider",
        why: "May improve neural mobility without aggressive stretching.",
        instructions: ["Sit tall near the edge of a chair.", "Straighten one knee while looking slightly upward.", "Then bend the knee back down while looking slightly downward.", "Move smoothly, not forcefully."],
        dose: "1–2 sets × 10 reps per side, daily",
        keyCues: ["This is a glide, not a hard stretch.", "Stop if it produces a lingering flare."],
        imageKey: "nerve-slider"
      },
      {
        name: "Bridge",
        why: "Improves glute support and reduces repeated spinal strain.",
        instructions: ["Lie on your back with knees bent.", "Tighten glutes and gently brace the abdomen.", "Lift hips to form a straight line from shoulders to knees.", "Hold 2 to 3 seconds.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "bridge"
      },
      {
        name: "Bird Dog",
        why: "Improves trunk control with relatively low spinal motion.",
        instructions: ["Start on hands and knees.", "Reach one leg back and the opposite arm forward.", "Keep pelvis level.", "Hold 3 seconds.", "Return and switch."],
        dose: "2–3 sets × 6–8 reps per side, every other day",
        imageKey: "bird-dog"
      }
    ],
    urgentSigns: ["Progressive weakness", "Bowel or bladder changes", "Saddle numbness", "Severe unremitting pain"],
    programAudit: "Aligned with guideline reviews favoring initial conservative management and exercise-based rehabilitation for many radicular presentations."
  },

  // 7. Patellofemoral Pain
  {
    id: "patellofemoral",
    condition: "Patellofemoral Pain",
    goal: "Improve hip and knee strength, reduce patellofemoral joint stress, and restore stair/squat tolerance.",
    description: "The strongest exercise recommendations emphasize combined hip and knee strengthening, which performs better than knee-only approaches.",
    bodyRegion: "knee",
    symptoms: ["pain around or behind the kneecap", "pain going up/down stairs", "pain with squatting", "pain after prolonged sitting", "knee gives way feeling"],
    exercises: [
      {
        name: "Side-Lying Hip Abduction",
        why: "Strengthens gluteus medius to improve femur control.",
        instructions: ["Lie on your side.", "Bottom knee bent for balance.", "Top leg straight, toes pointing forward.", "Lift top leg 20 to 30 cm.", "Lower slowly."],
        dose: "3 sets × 12–15 reps per side, every other day",
        imageKey: "hip-abduction"
      },
      {
        name: "Clamshell",
        why: "Targets posterolateral hip muscles.",
        instructions: ["Lie on your side with hips and knees bent.", "Keep feet together.", "Lift the top knee without rolling pelvis backward.", "Lower slowly."],
        dose: "3 sets × 12–15 reps per side, every other day",
        imageKey: "clamshell"
      },
      {
        name: "Sit-to-Stand",
        why: "Functional quadriceps strengthening.",
        instructions: ["Sit near the edge of a chair.", "Feet hip-width apart.", "Lean slightly forward.", "Stand up.", "Sit down slowly."],
        dose: "3 sets × 8–15 reps, every other day",
        painRule: "Mild discomfort is acceptable. Keep pain during exercise at a manageable level.",
        imageKey: "sit-to-stand"
      },
      {
        name: "Step-Down from Low Step",
        why: "Improves eccentric knee control.",
        instructions: ["Stand on a low step.", "Slowly lower the opposite heel toward the floor.", "Keep the knee aligned over the middle of the foot.", "Return to start."],
        dose: "2–3 sets × 8–12 reps per side, every other day",
        regression: "Use a lower step or hold support lightly.",
        imageKey: "step-down"
      },
      {
        name: "Wall Sit",
        why: "Develops quadriceps endurance.",
        instructions: ["Stand with back against a wall.", "Slide down into a partial squat.", "Knees remain behind or roughly over mid-foot.", "Hold 15 to 30 seconds.", "Stand back up."],
        dose: "4–5 holds, every other day",
        important: "Avoid deep painful squats and repeated stairs/hills if they flare symptoms badly.",
        imageKey: "wall-sit"
      }
    ],
    programAudit: "Consistent with patellofemoral pain CPGs emphasizing combined hip and knee strengthening."
  },

  // 8. Lateral Ankle Sprain
  {
    id: "ankle-sprain",
    condition: "Lateral Ankle Sprain",
    goal: "Restore ankle strength, balance, and confidence while reducing recurrence risk.",
    description: "Updated guidance supports optimal loading, exercise, and balance/proprioceptive retraining rather than prolonged rest alone.",
    bodyRegion: "ankle-foot",
    symptoms: ["ankle swelling", "ankle instability", "pain with walking", "difficulty on uneven ground", "repeated ankle rolling"],
    exercises: [
      {
        name: "Ankle Eversion with Band",
        why: "Strengthens the peroneal muscles that help protect against inversion sprains.",
        instructions: ["Sit with legs out.", "Loop a band around the forefoot.", "Anchor the other end inward.", "Turn the foot outward against resistance.", "Return slowly."],
        dose: "3 sets × 12–15 reps, every other day",
        imageKey: "ankle-eversion"
      },
      {
        name: "Calf Raise",
        why: "Restores ankle strength and push-off.",
        instructions: ["Stand holding a counter if needed.", "Raise onto your toes.", "Pause 1 second.", "Lower slowly."],
        dose: "3 sets × 10–15 reps, every other day",
        progression: "Single-leg calf raises.",
        imageKey: "calf-raise"
      },
      {
        name: "Single-Leg Balance",
        why: "Improves proprioception and recurrence prevention.",
        instructions: ["Stand on the injured leg.", "Keep knee slightly soft.", "Hold balance 20 to 30 seconds.", "Repeat."],
        dose: "4–5 holds, daily",
        progression: "Eyes closed, unstable surface, head turns.",
        imageKey: "single-leg-balance"
      },
      {
        name: "Step-Up",
        why: "Restores functional ankle/knee control.",
        instructions: ["Step onto a low step with the injured side.", "Straighten fully.", "Step down with control."],
        dose: "2–3 sets × 8–12 reps, every other day",
        imageKey: "step-up"
      },
      {
        name: "Lateral Band Walk",
        why: "Supports frontal-plane control of the whole lower limb.",
        instructions: ["Place a loop band around ankles or above knees.", "Slight bend in knees and hips.", "Step sideways slowly.", "Keep toes forward."],
        dose: "2–3 sets × 8–12 steps each direction, every other day",
        imageKey: "lateral-band-walk"
      }
    ],
    urgentSigns: ["Unable to bear weight after several days", "Marked bony tenderness", "Locking, gross instability, or suspected fracture"],
    programAudit: "Consistent with ankle-sprain CPGs supporting exercise, optimal loading, and balance retraining."
  },

  // 9. Achilles Tendinopathy
  {
    id: "achilles",
    condition: "Achilles Tendinopathy",
    goal: "Progressively reload the tendon and improve calf capacity.",
    description: "Current guidance identifies tendon-loading exercise as first-line treatment for midportion Achilles tendinopathy.",
    bodyRegion: "lower-leg",
    symptoms: ["pain at the back of the heel/ankle", "morning stiffness in the Achilles", "pain with walking or running", "tendon thickening or swelling"],
    exercises: [
      {
        name: "Double-Leg Calf Raise",
        why: "Initial loading when the tendon is irritable.",
        instructions: ["Stand holding a support.", "Rise onto both toes.", "Pause 1 second.", "Lower slowly over 2 to 3 seconds."],
        dose: "3 sets × 12–15 reps, every other day",
        imageKey: "calf-raise"
      },
      {
        name: "Single-Leg Calf Raise",
        why: "Increases tendon and calf loading.",
        instructions: ["Stand on the affected leg.", "Rise onto the toes.", "Lower slowly."],
        dose: "3 sets × 6–12 reps, every other day",
        regression: "Use both legs up, one leg down.",
        imageKey: "single-leg-calf-raise"
      },
      {
        name: "Bent-Knee Calf Raise",
        why: "Adds more soleus emphasis.",
        instructions: ["Stand holding support.", "Bend knees slightly.", "Rise onto the toes.", "Lower slowly."],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "bent-knee-calf-raise"
      },
      {
        name: "Eccentric Heel Drop from Step",
        why: "A classic loading option for suitable patients.",
        instructions: ["Stand on a step on both forefeet.", "Rise up with both feet.", "Shift weight to the affected side.", "Lower heel slowly below the step.", "Use both feet to come back up if needed."],
        dose: "3 sets × 10–15 reps, every other day",
        important: "Avoid if insertional Achilles pain is aggravated by dropping below step level.",
        imageKey: "eccentric-heel-drop"
      },
      {
        name: "Seated Calf Raise",
        why: "Adds controlled load with less balance demand.",
        instructions: ["Sit with feet flat.", "Place weight over knees if tolerated.", "Raise heels.", "Lower slowly."],
        dose: "3 sets × 12–15 reps, every other day",
        painRule: "Mild to moderate tendon discomfort during loading can be acceptable. Next-day pain and stiffness should stay manageable.",
        imageKey: "seated-calf-raise"
      }
    ],
    programAudit: "Consistent with 2024 Achilles CPGs prioritizing tendon-loading exercise."
  },

  // 10. Adhesive Capsulitis (Frozen Shoulder)
  {
    id: "frozen-shoulder",
    condition: "Adhesive Capsulitis (Frozen Shoulder)",
    goal: "Restore shoulder motion gradually, then rebuild shoulder strength as irritability settles.",
    description: "The JOSPT clinical practice guideline supports staged, impairment-based management, including stretching/mobility and progressive exercise.",
    bodyRegion: "shoulder",
    symptoms: ["gradual loss of shoulder movement", "pain at end range of motion", "difficulty reaching overhead or behind back", "night pain", "stiffness that came on gradually"],
    exercises: [
      {
        name: "Pendulum",
        why: "Low-load movement that can help maintain motion when the shoulder is painful.",
        instructions: ["Lean forward and support yourself with the other hand on a table.", "Let the affected arm hang relaxed.", "Gently sway your body to create small circles with the arm.", "Do circles clockwise and counterclockwise.", "Keep the shoulder relaxed."],
        dose: "30–60 seconds × 2–3 rounds, 1–2 times daily",
        imageKey: "pendulum"
      },
      {
        name: "Assisted Flexion with Stick",
        why: "Helps regain shoulder elevation with assistance rather than forcing through painful resistance.",
        instructions: ["Lie on your back holding a stick or cane with both hands.", "Use the unaffected arm to help raise the affected arm overhead.", "Move only into tolerable stretch.", "Pause 2 to 3 seconds.", "Return slowly."],
        dose: "2–3 sets × 8–12 reps, daily",
        imageKey: "assisted-flexion-stick"
      },
      {
        name: "External Rotation with Stick",
        why: "External rotation is commonly limited in adhesive capsulitis and is a key target for restoring motion.",
        instructions: ["Lie on your back or sit upright.", "Keep elbows close to your sides.", "Hold a stick with both hands.", "Use the unaffected side to gently rotate the affected forearm outward.", "Pause briefly, then return."],
        dose: "2–3 sets × 8–12 reps, daily",
        imageKey: "ext-rotation-stick"
      },
      {
        name: "Wall Slide",
        why: "Progresses active-assisted elevation and helps bridge toward active control.",
        instructions: ["Face a wall.", "Place a towel under the affected hand if needed.", "Slide the hand upward as high as tolerable.", "Pause 1 to 2 seconds.", "Slide back down slowly."],
        dose: "2–3 sets × 8–12 reps, daily",
        imageKey: "wall-slide"
      },
      {
        name: "Isometric External Rotation",
        why: "Once motion work is tolerated, light isometrics can begin rebuilding cuff strength without large movement.",
        instructions: ["Stand with elbow bent 90° and tucked at your side.", "Place the back of the hand against a wall or door frame.", "Gently push outward without moving the arm.", "Hold 10 to 20 seconds.", "Relax."],
        dose: "4–5 holds, once daily",
        painRule: "Frozen shoulder exercises should create a tolerable stretch, not a sharp flare. If pain or stiffness is clearly worse the next day, reduce range or volume.",
        imageKey: "isometric-ext-rotation"
      }
    ],
    programAudit: "Aligned with the adhesive capsulitis CPG emphasizing staged exercise based on pain, mobility loss, and irritability."
  },

  // 11. Lateral Epicondylalgia
  {
    id: "lateral-epicondylalgia",
    condition: "Lateral Epicondylalgia (Tennis Elbow)",
    goal: "Improve tendon load tolerance of the wrist extensors and restore grip function.",
    description: "The 2022 JOSPT clinical practice guideline supports exercise-based management, especially progressive loading.",
    bodyRegion: "elbow-wrist-hand",
    symptoms: ["outer elbow pain", "pain gripping objects", "pain lifting or twisting", "weakness in grip", "pain carrying bags"],
    exercises: [
      {
        name: "Isometric Wrist Extension",
        why: "Useful when the elbow is irritable and resisted movement is painful.",
        instructions: ["Sit with forearm supported on a table, palm facing down.", "Make a gentle fist.", "Use the other hand to resist as you try to lift the knuckles upward.", "Do not allow visible movement.", "Hold 20 to 30 seconds."],
        dose: "4–5 holds, once or twice daily",
        imageKey: "isometric-wrist-ext"
      },
      {
        name: "Eccentric Wrist Extension",
        why: "Progressive extensor tendon loading is central in tendinopathy rehab.",
        instructions: ["Sit with forearm supported, palm down, hand off the edge.", "Hold a light weight.", "Use the other hand to help lift the wrist up.", "Slowly lower the wrist down using the affected side over 3 to 5 seconds.", "Reset and repeat."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "eccentric-wrist-ext"
      },
      {
        name: "Concentric-Eccentric Wrist Extension",
        why: "Progresses from eccentric-dominant loading toward full strengthening.",
        instructions: ["Sit with forearm supported, palm down.", "Lift the wrist up with the affected arm.", "Lower slowly with control.", "Keep the movement isolated to the wrist."],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "wrist-extension"
      },
      {
        name: "Supination with Hammer or Dumbbell",
        why: "The lateral elbow region often benefits from progressive forearm loading.",
        instructions: ["Sit with elbow at 90° and tucked at your side.", "Hold a hammer or dumbbell vertically.", "Rotate the forearm so the palm turns upward.", "Return slowly."],
        dose: "2–3 sets × 10–12 reps, every other day",
        imageKey: "supination"
      },
      {
        name: "Towel Squeeze or Putty Grip",
        why: "Grip strengthening is functionally relevant once symptoms are manageable.",
        instructions: ["Hold a rolled towel or therapy putty.", "Squeeze gradually, not maximally at first.", "Hold 3 seconds.", "Relax slowly."],
        dose: "2–3 sets × 10 reps, every other day",
        painRule: "Mild pain during tendon loading can be acceptable. Next-day symptoms should remain tolerable.",
        imageKey: "towel-squeeze"
      }
    ],
    programAudit: "Aligned with the lateral elbow pain CPG and tendinopathy-loading principles."
  },

  // 12. Hip Osteoarthritis
  {
    id: "hip-oa",
    condition: "Hip Osteoarthritis",
    goal: "Improve hip strength, motion, walking tolerance, and functional capacity.",
    description: "The updated hip osteoarthritis CPG supports individualized exercise programs to improve motion, strength, and function.",
    bodyRegion: "hip-groin",
    symptoms: ["hip stiffness", "groin pain with walking", "difficulty putting on shoes/socks", "pain with stairs", "reduced hip range of motion"],
    exercises: [
      {
        name: "Sit-to-Stand",
        why: "Highly functional lower-limb strengthening for everyday activities.",
        instructions: ["Sit near the edge of a chair.", "Feet hip-width apart.", "Lean forward slightly.", "Stand up without pushing through the hands if possible.", "Sit down slowly."],
        dose: "3 sets × 8–15 reps, every other day",
        imageKey: "sit-to-stand"
      },
      {
        name: "Bridge",
        why: "Strengthens gluteals and posterior chain with relatively low joint irritation.",
        instructions: ["Lie on your back with knees bent.", "Tighten the glutes.", "Lift hips until shoulders, hips, and knees form a straight line.", "Hold 2 to 3 seconds.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "bridge"
      },
      {
        name: "Side-Lying Hip Abduction",
        why: "Hip abductor strength is important for pelvic control, gait, and stair function.",
        instructions: ["Lie on your side with the bottom knee bent.", "Keep the top leg straight and toes forward.", "Lift the top leg 20 to 30 cm.", "Lower slowly."],
        dose: "2–3 sets × 10–15 reps per side, every other day",
        imageKey: "hip-abduction"
      },
      {
        name: "Step-Up",
        why: "Restores functional hip and knee extension strength.",
        instructions: ["Use a low step.", "Step up with the affected side.", "Straighten fully.", "Step down slowly."],
        dose: "2–3 sets × 8–12 reps per side, every other day",
        imageKey: "step-up"
      },
      {
        name: "Standing Hip Extension with Band",
        why: "Targets gluteus maximus and supports walking and climbing.",
        instructions: ["Attach a band behind you at ankle level.", "Stand tall while holding support.", "Move the affected leg backward without arching your back.", "Return slowly."],
        dose: "2–3 sets × 10–15 reps per side, every other day",
        painRule: "Tolerable OA discomfort during exercise is acceptable. Swelling or flare lasting more than 24 hours means reduce load.",
        imageKey: "hip-extension-band"
      }
    ],
    programAudit: "Consistent with hip OA CPGs recommending individualized strengthening and functional exercise."
  },

  // 13. Greater Trochanteric Pain Syndrome
  {
    id: "gtps",
    condition: "Greater Trochanteric Pain Syndrome / Gluteal Tendinopathy",
    goal: "Reduce compressive irritation at the gluteal tendons and build abductor loading tolerance.",
    description: "JOSPT sources support education plus exercise and emphasize load management for gluteal tendinopathy.",
    bodyRegion: "hip-groin",
    symptoms: ["outer hip pain", "pain lying on the affected side", "pain with stairs", "pain standing on one leg", "hip pain with walking"],
    exercises: [
      {
        name: "Isometric Wall Press for Hip Abductors",
        why: "Low-irritability starting point for gluteal tendon loading.",
        instructions: ["Stand sideways next to a wall with the affected leg farthest from the wall.", "Bend the knee of the unaffected leg and place that side against the wall.", "Push the wall sideways using the bent leg so the affected outer hip works to hold you level.", "Hold 20 to 30 seconds.", "Relax."],
        dose: "4–5 holds, once daily",
        imageKey: "isometric-hip-wall"
      },
      {
        name: "Side-Lying Hip Abduction",
        why: "Classic gluteus medius strengthening, dosed carefully based on irritability.",
        instructions: ["Lie on your side with the painful side up.", "Bottom knee bent for balance.", "Keep the top leg straight and slightly behind the trunk.", "Lift the top leg 20 to 30 cm.", "Lower slowly."],
        dose: "2–3 sets × 8–12 reps, every other day",
        imageKey: "hip-abduction"
      },
      {
        name: "Bridge with Band Around Knees",
        why: "Improves gluteal recruitment while avoiding prolonged hip-adduction compression.",
        instructions: ["Lie on your back with knees bent.", "Place a loop band around the knees.", "Gently press knees outward.", "Lift hips into a bridge.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "bridge-band"
      },
      {
        name: "Lateral Band Walk",
        why: "Progressive standing hip-abductor loading.",
        instructions: ["Place a loop band around the ankles or above the knees.", "Slight bend in hips and knees.", "Step sideways slowly.", "Keep pelvis level and toes forward."],
        dose: "2–3 sets × 8–12 steps each direction, every other day",
        imageKey: "lateral-band-walk"
      },
      {
        name: "Step-Up",
        why: "Functional single-leg loading progression when symptoms allow.",
        instructions: ["Use a low step.", "Step up with the affected leg.", "Keep the pelvis level.", "Step down slowly."],
        dose: "2–3 sets × 8–10 reps, every other day",
        important: "Avoid lying on the painful side. Avoid standing with the hip pushed out to one side. Avoid crossing legs, especially early on.",
        imageKey: "step-up"
      }
    ],
    programAudit: "Consistent with gluteal tendinopathy literature emphasizing load management plus progressive exercise."
  },

  // 14. Plantar Heel Pain
  {
    id: "plantar-heel",
    condition: "Plantar Heel Pain / Plantar Fasciopathy",
    goal: "Progressively load the plantar fascia–calf complex and improve foot intrinsic support.",
    description: "Exercise-based care is widely supported. Plantar fascia–specific plus calf loading is commonly used in conservative management.",
    bodyRegion: "ankle-foot",
    symptoms: ["heel pain first thing in the morning", "pain with first steps after rest", "arch pain", "pain after prolonged standing", "heel tenderness"],
    exercises: [
      {
        name: "Plantar Fascia Stretch",
        why: "Specifically targets the plantar fascia, especially useful first thing in the morning.",
        instructions: ["Sit with the affected ankle crossed over the other leg.", "Pull the toes and forefoot upward with your hand.", "You should feel stretch in the arch.", "Hold 20 to 30 seconds."],
        dose: "4–5 holds, 2–3 times daily",
        imageKey: "plantar-stretch"
      },
      {
        name: "Standing Calf Stretch",
        why: "Limited calf flexibility can contribute to heel loading.",
        instructions: ["Stand facing a wall.", "Place the affected leg behind you with knee straight.", "Lean forward until you feel a calf stretch.", "Keep the heel down."],
        dose: "3–5 holds of 30 seconds, daily",
        imageKey: "calf-stretch"
      },
      {
        name: "Bent-Knee Calf Stretch",
        why: "Adds more soleus emphasis.",
        instructions: ["Same setup as standing calf stretch.", "Bend the back knee slightly while keeping the heel down.", "Lean forward into the stretch.", "Hold."],
        dose: "3–5 holds of 30 seconds, daily",
        imageKey: "bent-knee-calf-stretch"
      },
      {
        name: "Heel Raise with Towel Under Toes",
        why: "Progressive loading with the toes extended loads the plantar fascia more directly.",
        instructions: ["Place a rolled towel under the toes.", "Stand holding support.", "Rise onto the toes.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "heel-raise-towel"
      },
      {
        name: "Towel Scrunch / Short-Foot Exercise",
        why: "Helps strengthen the foot intrinsics and arch control.",
        instructions: ["Sit with the foot on a towel.", "Curl the toes to draw the towel inward, or gently shorten the foot by drawing the ball of the foot toward the heel without clawing.", "Relax slowly."],
        dose: "2–3 sets × 10–15 reps, daily",
        painRule: "Heel discomfort with loading can be mild to moderate. Severe morning pain increase the next day means reduce volume.",
        imageKey: "towel-scrunch"
      }
    ],
    programAudit: "Aligned with plantar heel pain rehab principles emphasizing stretching and progressive loading."
  },

  // 15. Carpal Tunnel Syndrome
  {
    id: "carpal-tunnel",
    condition: "Carpal Tunnel Syndrome",
    goal: "Reduce median nerve irritation sensitivity, maintain tendon and nerve mobility, and gradually rebuild hand/wrist function.",
    description: "Current AAOS and physical therapy guidance include conservative care options such as nerve and tendon gliding, splinting, and activity modification.",
    bodyRegion: "elbow-wrist-hand",
    symptoms: ["numbness or tingling in thumb, index, and middle fingers", "hand weakness", "dropping objects", "night symptoms in the hand", "wrist pain"],
    exercises: [
      {
        name: "Median Nerve Glide",
        why: "Gentle nerve gliding is commonly used to improve median nerve mobility without aggressive tensioning.",
        instructions: ["Start with your arm at your side, elbow bent, wrist neutral, fingers and thumb gently curled.", "Slowly open the hand.", "Extend the wrist back gently.", "Straighten the elbow a little at a time only as tolerated.", "Reverse the sequence to return to start."],
        dose: "1–2 sets × 5–10 reps, 1–2 times daily",
        keyCues: ["This should feel like a mild glide, not a strong stretch.", "Stop short of tingling that lingers after the exercise."],
        imageKey: "nerve-glide"
      },
      {
        name: "Tendon-Gliding Sequence",
        why: "Tendon glides help the flexor tendons move more freely through the carpal tunnel.",
        instructions: ["Move through these hand positions slowly: straight hand → hook fist → full fist → tabletop position → straight fist.", "Return to straight hand after each position."],
        dose: "1 set × 5 rounds through the full sequence, 1–2 times daily",
        imageKey: "tendon-glide"
      },
      {
        name: "Wrist Flexor Stretch",
        why: "Gentle forearm flexibility work can reduce stiffness around the wrist and hand.",
        instructions: ["Extend the affected arm in front of you with elbow straight.", "Palm faces upward.", "Use the other hand to gently extend the wrist and fingers backward.", "Hold a mild stretch only."],
        dose: "3–5 holds × 20 seconds each, daily",
        imageKey: "wrist-flexor-stretch"
      },
      {
        name: "Wrist Extension with Light Resistance",
        why: "Once symptoms are calmer, light wrist strengthening can help restore function.",
        instructions: ["Rest the forearm on a table, palm facing down, hand over the edge.", "Hold a very light weight.", "Lift the back of the hand upward.", "Lower slowly."],
        dose: "2–3 sets × 10–12 reps, every other day",
        imageKey: "wrist-extension"
      },
      {
        name: "Soft Putty or Towel Squeeze",
        why: "Light grip strengthening can be added after irritability decreases.",
        instructions: ["Hold soft putty or a rolled towel.", "Squeeze gradually, not maximally.", "Hold 2 to 3 seconds.", "Relax fully."],
        dose: "2 sets × 8–12 reps, every other day",
        stopIf: "Progressive thumb weakness, persistent numbness worsening, symptoms severe at night despite splinting, or thenar wasting.",
        imageKey: "towel-squeeze"
      }
    ],
    programAudit: "Aligned with AAOS and PT guidance supporting conservative exercise options for appropriate CTS presentations."
  },

  // 16. Medial Epicondylitis
  {
    id: "medial-epicondylitis",
    condition: "Medial Epicondylitis (Golfer's Elbow)",
    goal: "Restore tendon load tolerance of the wrist flexors and flexor-pronator mass, reduce pain, and rebuild grip and forearm function.",
    description: "Conservative management emphasizes progressive loading, starting with isometric holds and advancing through eccentric and concentric strengthening. Stretching and grip work are added as symptoms allow.",
    bodyRegion: "elbow-wrist-hand",
    symptoms: ["inner elbow pain", "pain gripping objects", "pain with wrist flexion", "forearm tightness", "pain throwing or lifting"],
    exercises: [
      {
        name: "Isometric Wrist Flexion",
        why: "Good starting exercise when the tendon is irritable. Progressive loading approaches for medial epicondylitis commonly begin with symptom-limited strengthening.",
        instructions: [
          "Sit with forearm supported on a table, palm up.",
          "Make a gentle fist.",
          "Use the other hand to resist as you try to curl the wrist upward.",
          "Do not let the wrist move.",
          "Hold 20–30 seconds."
        ],
        dose: "4–5 holds, 1–2 times daily",
        imageKey: "isometric-wrist-flexion"
      },
      {
        name: "Eccentric Wrist Flexion",
        why: "One of the most cited exercises for painful medial epicondylitis in AAOS exercise materials.",
        instructions: [
          "Sit with forearm supported on a table, palm up, wrist just past the edge.",
          "Hold a light dumbbell.",
          "Use the other hand to help lift the wrist up.",
          "Then slowly lower the wrist down over 3–5 seconds using the affected side only.",
          "Reset and repeat."
        ],
        dose: "3 sets × 8–12 reps, every other day",
        keyCues: ["Focus on the slow lowering phase.", "Keep the forearm flat on the table throughout."],
        imageKey: "eccentric-wrist-flexion"
      },
      {
        name: "Concentric-Eccentric Wrist Flexion",
        why: "Progresses from eccentric-only loading toward fuller strengthening. General epicondylitis rehab programs include this type of progressive forearm strengthening.",
        instructions: [
          "Same setup: forearm supported, palm up, light weight in hand.",
          "Curl the wrist upward slowly.",
          "Lower slowly.",
          "Keep the movement at the wrist only."
        ],
        dose: "3 sets × 10–15 reps, every other day",
        progression: "Gradually increase weight as tolerated.",
        imageKey: "concentric-wrist-flexion"
      },
      {
        name: "Forearm Pronation with Hammer or Dumbbell",
        why: "The flexor-pronator mass is involved in medial epicondylitis, so pronation loading is commonly included in rehab.",
        instructions: [
          "Sit with elbow bent to 90° and tucked at your side.",
          "Hold a hammer near the end or hold a dumbbell vertically.",
          "Start with the forearm in a neutral position.",
          "Slowly rotate the palm downward into pronation.",
          "Return slowly to neutral."
        ],
        dose: "2–3 sets × 10–12 reps, every other day",
        imageKey: "forearm-pronation"
      },
      {
        name: "Wrist Flexor Stretch",
        why: "Stretching is commonly included in conservative medial epicondylitis programs alongside strengthening.",
        instructions: [
          "Straighten the affected arm in front of you with the palm up.",
          "Use the opposite hand to gently pull the fingers and palm down and back.",
          "You should feel a stretch along the inside/front of the forearm.",
          "Hold 20–30 seconds."
        ],
        dose: "3–5 holds, daily",
        imageKey: "wrist-flexor-stretch"
      },
      {
        name: "Soft Towel or Putty Squeeze",
        why: "Light grip strengthening added once the elbow is calmer.",
        instructions: [
          "Hold a soft towel or therapy putty.",
          "Squeeze gradually, not maximally.",
          "Hold 2–3 seconds.",
          "Relax fully."
        ],
        dose: "2 sets × 8–12 reps, every other day",
        painRule: "Mild discomfort during exercise is acceptable. Pain should settle back near baseline by the next day. If next-day pain is clearly worse, reduce load, range, or volume.",
        imageKey: "towel-squeeze"
      }
    ],
    programAudit: "Aligned with AAOS exercise guidance and current tendinopathy loading principles for medial epicondylitis."
  },

  // 17. Hamstring Strain
  {
    id: "hamstring-strain",
    condition: "Hamstring Strain",
    goal: "Restore pain-free strength, especially eccentric strength, then rebuild running and sprint tolerance.",
    description: "The JOSPT hamstring strain guidance emphasizes progressive loading and specifically supports eccentric strengthening.",
    bodyRegion: "thigh",
    symptoms: ["sudden sharp pain at the back of the thigh", "pain with sprinting or kicking", "tenderness in the hamstring", "bruising behind the thigh", "difficulty bending forward"],
    exercises: [
      {
        name: "Isometric Heel Dig Bridge",
        why: "Useful early to load the hamstrings with relatively low irritation.",
        instructions: ["Lie on your back with knees bent and heels on the floor.", "Dig your heels into the floor.", "Lift your hips slightly into a bridge.", "Hold 10 to 20 seconds.", "Lower slowly."],
        dose: "4–5 holds, once daily",
        imageKey: "heel-dig-bridge"
      },
      {
        name: "Bridge Walkout",
        why: "Increases hamstring demand through a longer lever.",
        instructions: ["Start in a bridge position.", "Slowly walk the feet away from the hips a few small steps.", "Keep hips lifted as able.", "Walk feet back in.", "Lower."],
        dose: "2–3 sets × 5–8 reps, every other day",
        imageKey: "bridge-walkout"
      },
      {
        name: "Romanian Deadlift",
        why: "Loads the hamstrings through hip hinge mechanics and helps restore functional posterior-chain strength.",
        instructions: ["Stand tall holding light weights.", "Slight bend in the knees.", "Hinge at the hips, sending them backward.", "Keep the back neutral.", "Lower until a hamstring stretch is felt.", "Return to standing by driving the hips forward."],
        dose: "3 sets × 6–10 reps, every other day",
        imageKey: "romanian-deadlift"
      },
      {
        name: "Prone Hamstring Curl with Band",
        why: "Restores direct knee-flexor strength with adjustable resistance.",
        instructions: ["Lie on your stomach.", "Attach a band to the ankle.", "Bend the knee, bringing the heel toward the buttock.", "Lower slowly."],
        dose: "2–3 sets × 10–15 reps, every other day",
        imageKey: "hamstring-curl"
      },
      {
        name: "Nordic Hamstring Exercise",
        why: "One of the best-supported eccentric hamstring exercises, especially in prevention and high-level return phases.",
        instructions: ["Kneel with ankles held or anchored.", "Keep the hips extended and trunk straight.", "Slowly lean forward from the knees.", "Use your hands to catch yourself as needed.", "Push lightly off the floor to return."],
        dose: "2–3 sets × 4–6 reps, every other day",
        important: "This is an advanced exercise. Do not start with this if walking is still painful.",
        imageKey: "nordic-hamstring"
      }
    ],
    programAudit: "Aligned with hamstring-strain guidance emphasizing progressive strengthening, eccentric loading, and staged return to running."
  },

  // 17. Adductor / Groin Strain
  {
    id: "groin-strain",
    condition: "Adductor / Groin Strain",
    goal: "Restore adductor strength, pelvic control, and tolerance for cutting, lunging, and directional change.",
    description: "Recent groin-pain literature supports strengthening-based rehabilitation, with Copenhagen adduction exercise being one of the best-known options.",
    bodyRegion: "hip-groin",
    symptoms: ["inner thigh or groin pain", "pain with kicking", "pain with quick direction changes", "groin tenderness", "pain with lunging"],
    exercises: [
      {
        name: "Ball Squeeze Isometric",
        why: "A simple low-irritability starting exercise for adductor loading.",
        instructions: ["Lie on your back with knees bent.", "Place a ball or rolled towel between the knees.", "Squeeze gently to moderately.", "Hold 10 seconds.", "Relax."],
        dose: "5 holds, once daily",
        imageKey: "ball-squeeze"
      },
      {
        name: "Side-Lying Hip Adduction",
        why: "Directly strengthens the adductors with controllable load.",
        instructions: ["Lie on the unaffected side.", "Cross the top leg over and place that foot on the floor.", "Keep the bottom leg straight.", "Lift the bottom leg upward.", "Lower slowly."],
        dose: "2–3 sets × 10–15 reps, every other day",
        imageKey: "hip-adduction"
      },
      {
        name: "Standing Lateral Lunge",
        why: "Restores controlled adductor loading in a more functional position.",
        instructions: ["Stand tall.", "Step out to the side.", "Sit the hips back into the stepping leg.", "Keep the other leg straight.", "Push back to start."],
        dose: "2–3 sets × 8–10 reps per side, every other day",
        imageKey: "lateral-lunge"
      },
      {
        name: "Copenhagen Adduction (Short Lever)",
        why: "Widely used to build adductor strength with one of the strongest evidence profiles.",
        instructions: ["Lie on your side with your top knee supported on a bench or chair.", "Support your body on your lower forearm.", "Lift the lower hip off the floor so the top leg presses into the support.", "Hold briefly.", "Lower with control."],
        dose: "2 sets × 5–8 reps or short holds, every other day",
        important: "Start with the short-lever version only. This is advanced and should not be the first exercise in an acute strain.",
        imageKey: "copenhagen-adduction"
      },
      {
        name: "Split Squat",
        why: "Helps bridge adductor rehab into more functional lower-body strengthening.",
        instructions: ["Stand in a staggered stance.", "Lower straight down into a partial lunge.", "Keep trunk upright.", "Push back up."],
        dose: "2–3 sets × 8–12 reps, every other day",
        imageKey: "split-squat"
      }
    ],
    programAudit: "Consistent with modern groin-pain rehab emphasizing progressive strengthening of the adductors and surrounding hip/pelvic musculature."
  },

  // 18. Meniscal Irritation
  {
    id: "meniscal",
    condition: "Meniscal Irritation / Degenerative Meniscal Pain",
    goal: "Reduce pain and swelling, restore quadriceps strength, improve knee control, and return to walking, stairs, and squatting tolerance.",
    description: "Recent consensus statements support nonoperative treatment including physical therapy as the first approach for degenerative meniscal lesions.",
    bodyRegion: "knee",
    symptoms: ["knee pain with twisting", "knee swelling", "catching or locking sensation", "pain with deep squatting", "joint line tenderness"],
    exercises: [
      {
        name: "Quad Set",
        why: "Useful early when the knee is painful or swollen and stronger exercise is not yet well tolerated.",
        instructions: ["Sit or lie with the leg straight.", "Tighten the front of the thigh by pressing the knee gently downward.", "Hold 5 seconds.", "Relax."],
        dose: "2–3 sets × 10 reps, daily",
        imageKey: "quad-set"
      },
      {
        name: "Straight Leg Raise",
        why: "Builds quadriceps strength with low knee motion.",
        instructions: ["Lie on your back.", "Bend one knee and keep the other straight.", "Tighten the thigh of the straight leg.", "Lift it to the height of the opposite knee.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "straight-leg-raise"
      },
      {
        name: "Sit-to-Stand",
        why: "Restores functional lower-limb strength and daily activity tolerance.",
        instructions: ["Sit near the edge of a chair.", "Lean forward slightly.", "Stand up without using the hands if possible.", "Sit down slowly."],
        dose: "3 sets × 8–15 reps, every other day",
        imageKey: "sit-to-stand"
      },
      {
        name: "Step-Up",
        why: "Adds functional quadriceps and hip work with controllable depth and load.",
        instructions: ["Step onto a low platform.", "Straighten fully.", "Step down slowly.", "Keep the knee aligned over the middle of the foot."],
        dose: "2–3 sets × 8–12 reps per side, every other day",
        imageKey: "step-up"
      },
      {
        name: "Single-Leg Balance",
        why: "Consensus guidance includes neuromuscular training as part of nonoperative management.",
        instructions: ["Stand on the affected leg.", "Keep a slight bend in the knee.", "Hold 20 to 30 seconds.", "Repeat."],
        dose: "4–5 holds, daily",
        important: "Avoid deep painful squatting early. Avoid repeated twisting/pivoting if it provokes catching. Locked knee, major extension block, or large recurrent swelling warrants medical reassessment.",
        imageKey: "single-leg-balance"
      }
    ],
    programAudit: "Aligned with recent consensus statements supporting PT-first management for degenerative meniscal lesions."
  },

  // 19. ACL Rehabilitation
  {
    id: "acl-rehab",
    condition: "ACL Rehabilitation",
    goal: "Restore full extension, quadriceps strength, neuromuscular control, and progressive functional capacity.",
    description: "Recent ACL rehabilitation literature supports criterion-based rehab with both open- and closed-chain strengthening.",
    bodyRegion: "knee",
    symptoms: ["knee instability or giving way", "post-ACL surgery recovery", "knee swelling after injury", "difficulty with pivoting or cutting", "reduced confidence in the knee"],
    exercises: [
      {
        name: "Quad Set with Towel Under Knee",
        why: "Early quadriceps activation is fundamental after ACL injury or reconstruction.",
        instructions: ["Sit with the leg straight.", "Place a small towel under the knee.", "Tighten the thigh to push the knee downward into the towel.", "Hold 5 seconds.", "Relax."],
        dose: "2–3 sets × 10 reps, daily",
        imageKey: "quad-set-towel"
      },
      {
        name: "Straight Leg Raise",
        why: "Common early strengthening progression once a strong quad set is present.",
        instructions: ["Lie on your back with the involved leg straight.", "Tighten the quadriceps fully.", "Lift the leg to the height of the opposite knee.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        important: "Do not continue if the knee sags into extension lag during the lift.",
        imageKey: "straight-leg-raise"
      },
      {
        name: "Terminal Knee Extension with Band",
        why: "Helps restore end-range knee extension strength and gait mechanics.",
        instructions: ["Anchor a band behind the knee.", "Start with the knee slightly bent.", "Straighten the knee fully against the band.", "Pause 1 to 2 seconds.", "Return slowly."],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "terminal-knee-ext"
      },
      {
        name: "Mini Squat",
        why: "Closed-chain loading is a standard ACL rehab component.",
        instructions: ["Stand with feet hip-width apart.", "Sit the hips back into a shallow squat.", "Keep knees aligned over the feet.", "Return to standing."],
        dose: "3 sets × 10–15 reps, every other day",
        imageKey: "mini-squat"
      },
      {
        name: "Step-Up",
        why: "Progresses closed-chain control and single-leg function.",
        instructions: ["Use a low step.", "Step up with the involved leg.", "Straighten fully without collapsing inward.", "Step down slowly."],
        dose: "2–3 sets × 8–12 reps, every other day",
        important: "Rehab should be criterion-based, not just time-based, with swelling, pain, extension range, strength, and movement quality all guiding progression.",
        imageKey: "step-up"
      }
    ],
    programAudit: "Aligned with recent ACL rehabilitation updates emphasizing criterion-based progression and progressive quadriceps plus functional strengthening."
  },

  // 20. Patellar Tendinopathy
  {
    id: "patellar-tendinopathy",
    condition: "Patellar Tendinopathy (Jumper's Knee)",
    goal: "Improve tendon load tolerance, quadriceps strength, and return to jumping, stairs, squatting, and sport.",
    description: "Current clinical guidance supports progressive tendon-loading exercise as the foundation of treatment.",
    bodyRegion: "knee",
    symptoms: ["pain just below the kneecap", "pain with jumping or landing", "pain going up stairs", "pain with squatting", "stiffness after sitting"],
    exercises: [
      {
        name: "Spanish Squat Isometric",
        why: "A well-known isometric option that can load the patellar tendon while being relatively well tolerated.",
        instructions: ["Loop a strong strap or band behind both knees and anchor it in front of you.", "Lean back into the strap so it supports you.", "Sit into a squat with a fairly upright trunk.", "Keep weight through the mid-foot.", "Hold 20 to 45 seconds.", "Stand back up slowly."],
        dose: "4–5 holds, once daily or before activity",
        keyCues: ["Aim for tolerable tendon discomfort, not sharp pain.", "Knees should track over the middle of the feet."],
        imageKey: "spanish-squat"
      },
      {
        name: "Decline Squat / Heel-Elevated Squat",
        why: "Progressive squat loading is a mainstay of patellar tendon rehab.",
        instructions: ["Stand on a small decline board, wedge, or with heels elevated.", "Slowly squat down to a tolerable depth.", "Keep the trunk controlled and knees aligned.", "Return to standing slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        regression: "Use body weight only or reduce range.",
        imageKey: "decline-squat"
      },
      {
        name: "Leg Extension, Slow Tempo",
        why: "Isolated quadriceps loading commonly used in heavy slow resistance progression.",
        instructions: ["Sit in a knee-extension machine or use a resistance band.", "Straighten the knee slowly over 2 to 3 seconds.", "Lower slowly over 2 to 3 seconds.", "Stay within a tolerable pain range."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "leg-extension"
      },
      {
        name: "Step-Down",
        why: "Builds eccentric quadriceps control and functional tendon loading.",
        instructions: ["Stand on a low step.", "Slowly lower the opposite heel toward the floor.", "Keep the working knee aligned over the middle of the foot.", "Return to start."],
        dose: "2–3 sets × 8–12 reps per side, every other day",
        imageKey: "step-down"
      },
      {
        name: "Split Squat",
        why: "Progresses tendon and quadriceps loading into a more functional single-leg pattern.",
        instructions: ["Stand in a staggered stance.", "Lower straight down into a lunge.", "Keep front knee aligned with the foot.", "Push back up slowly."],
        dose: "3 sets × 8–12 reps per side, every other day",
        painRule: "Mild to moderate tendon discomfort during loading can be acceptable. Next-day pain and stiffness should remain manageable.",
        imageKey: "split-squat"
      }
    ],
    programAudit: "Consistent with contemporary patellar tendinopathy guidance prioritizing progressive tendon loading."
  },

  // 21. Posterior Hip / Piriformis-Related Buttock Pain
  {
    id: "posterior-hip",
    condition: "Posterior Hip / Piriformis-Related Buttock Pain",
    goal: "Improve hip external rotator and abductor strength, reduce compressive/irritable postures, and restore walking, stairs, and sitting tolerance.",
    description: "Conservative treatment commonly includes activity modification plus hip strengthening and mobility work.",
    bodyRegion: "hip-groin",
    symptoms: ["deep buttock pain", "pain sitting on hard surfaces", "pain radiating down the back of the leg", "piriformis tenderness", "hip tightness"],
    exercises: [
      {
        name: "Figure-4 Stretch",
        why: "Can reduce posterior hip stiffness when tolerated.",
        instructions: ["Lie on your back with both knees bent.", "Cross the affected ankle over the opposite knee.", "Lift the opposite thigh toward your chest.", "Hold a mild stretch in the buttock.", "Breathe normally."],
        dose: "3–5 holds × 20–30 seconds, daily",
        stopIf: "It reproduces strong tingling or clear nerve pain down the leg.",
        imageKey: "figure-4-stretch"
      },
      {
        name: "Clamshell",
        why: "Strengthens deep hip external rotators and posterolateral hip muscles.",
        instructions: ["Lie on your side with hips and knees bent.", "Keep feet together.", "Lift the top knee without rolling the pelvis backward.", "Lower slowly."],
        dose: "3 sets × 12–15 reps per side, every other day",
        imageKey: "clamshell"
      },
      {
        name: "Side-Lying Hip Abduction",
        why: "Improves gluteus medius strength and pelvic control.",
        instructions: ["Lie on your side with the bottom knee bent.", "Keep the top leg straight and toes pointing forward.", "Lift the top leg 20 to 30 cm.", "Lower slowly."],
        dose: "2–3 sets × 10–15 reps per side, every other day",
        imageKey: "hip-abduction"
      },
      {
        name: "Bridge",
        why: "Strengthens gluteus maximus and posterior chain without requiring large hip rotation.",
        instructions: ["Lie on your back with knees bent.", "Tighten the glutes.", "Lift the hips until shoulders, hips, and knees align.", "Hold 2 to 3 seconds.", "Lower slowly."],
        dose: "3 sets × 8–12 reps, every other day",
        imageKey: "bridge"
      },
      {
        name: "Lateral Band Walk",
        why: "Progresses hip-abductor and external-rotator loading in standing.",
        instructions: ["Place a loop band around the ankles or above the knees.", "Slight bend at hips and knees.", "Step sideways slowly.", "Keep toes forward and pelvis level."],
        dose: "2–3 sets × 8–12 steps each direction, every other day",
        important: "Avoid prolonged sitting positions that clearly provoke buttock or leg symptoms. Avoid aggressive stretching if it reproduces radiating pain. Progressive weakness, marked numbness, or worsening radiating pain warrants reassessment.",
        imageKey: "lateral-band-walk"
      }
    ],
    programAudit: "Consistent with conservative exercise principles used for deep gluteal/posterior hip presentations."
  },

  // ─── LUMBAR SPINAL STENOSIS BOOT CAMP ───
  {
    id: "lumbar-spinal-stenosis",
    condition: "Lumbar Spinal Stenosis – Boot Camp Program",
    goal: "Improve spinal mobility, core stability, and walking tolerance through a progressive flexion-based exercise program.",
    description: "A structured 6-week boot camp program designed for lumbar spinal stenosis. Exercises emphasize flexion-based positions that open the spinal canal, progressive core strengthening, nerve mobilization, and graduated walking. All exercises should be performed while avoiding back extension (arching backwards).",
    bodyRegion: "lower-back",
    symptoms: [
      "leg pain with walking",
      "neurogenic claudication",
      "leg heaviness",
      "lower back stiffness",
      "numbness in legs",
      "pain relief with sitting or bending forward",
      "difficulty standing upright",
      "lumbar stenosis",
      "spinal stenosis"
    ],
    urgentSigns: [
      "Sudden loss of bladder or bowel control",
      "Progressive weakness in both legs",
      "Saddle area numbness (inner thighs, buttocks, groin)",
      "Sudden inability to walk"
    ],
    exercises: [
      {
        name: "Stationary Bike (Leaning Forward)",
        why: "Cycling in a flexed posture opens the spinal canal and improves cardiovascular endurance with minimal spinal loading.",
        instructions: [
          "Be very careful when getting on and off the stationary bike — use a stool if needed.",
          "Adjust the seat height so your legs almost fully extend while pedalling.",
          "Lean forward onto the handlebars throughout.",
          "Use a bike with a large, comfortable seat.",
          "Start at 5–10 minutes and progress weekly."
        ],
        dose: "Week 1: 5–10 min → Week 6: 30 min, performed daily",
        keyCues: ["Lean forward onto handlebars", "Keep resistance light initially"],
        progression: "Increase duration by 5 minutes each week; add light resistance as tolerated.",
        painRule: "Reduce duration if leg symptoms increase during cycling.",
        imageKey: "stationary-bike-forward"
      },
      {
        name: "Knee to Chest Stretch",
        why: "Gently stretches the lower back and opens the lumbar spinal canal to relieve nerve compression.",
        instructions: [
          "Lie on your back with both legs straight.",
          "Bring one knee up to your chest.",
          "With both hands on the knee, pull it as far as you can toward your chest/shoulder.",
          "Keep the other leg straight on the mat.",
          "Hold, then repeat on the other side."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Keep opposite leg straight on mat", "Pull gently — no forcing"],
        progression: "Increase hold time by 1–2 seconds each week.",
        imageKey: "knee-to-chest-stretch"
      },
      {
        name: "Knee to Opposite Shoulder Stretch",
        why: "Targets the piriformis and deep hip rotators while further opening the lumbar canal.",
        instructions: [
          "Lie on your back and bring one knee to your chest.",
          "With both hands on the outside of the knee, pull it toward the opposite shoulder.",
          "Grasp the ankle with your opposite hand and pull at the same time.",
          "Hold, then repeat on the opposite side."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Direct the knee toward the opposite shoulder", "Keep shoulders flat on the mat"],
        progression: "Increase hold time by 1–2 seconds each week.",
        imageKey: "knee-to-opposite-shoulder"
      },
      {
        name: "Double Knee to Chest Stretch",
        why: "Maximizes lumbar flexion stretch and spinal canal opening bilaterally.",
        instructions: [
          "Lie on your back.",
          "Using your hands, bring both knees toward your chest.",
          "Pull as far as you can go and hold."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Perform after single knee-to-chest and opposite shoulder stretches for best results"],
        important: "Exercises 2, 3, and 4 can be done in sequence: Knee to Chest → Knee to Opposite Shoulder (both sides) → Double Knee to Chest.",
        imageKey: "double-knee-to-chest"
      },
      {
        name: "Pelvic Twist Stretch",
        why: "Rotational stretch that mobilizes the lumbar spine and reduces stiffness.",
        instructions: [
          "Lie on your back with both knees bent, feet flat on the floor.",
          "Bring both knees together to one side, then the other.",
          "Keep your shoulders flat on the floor.",
          "Do not shift your pelvis when moving side to side."
        ],
        dose: "Hold 5–10 sec each side, repeat 5×, performed daily",
        keyCues: ["Keep shoulders pinned to the floor", "Move slowly and controlled"],
        imageKey: "pelvic-twist"
      },
      {
        name: "Advanced Pelvic Twist",
        why: "Deeper rotational stretch targeting the lumbar spine and hip complex.",
        instructions: [
          "Lie on your back with both knees bent, feet flat on the mat.",
          "Place the right leg over the left knee.",
          "Keeping shoulders on the mat, drop the right knee toward your left side.",
          "Place your left hand on your right knee and direct it downward as far as you can.",
          "Hold, then repeat on the opposite side."
        ],
        dose: "Hold 5–10 sec each side, repeat 5×, performed daily",
        keyCues: ["Keep shoulders flat", "Use hand pressure gently to deepen the stretch"],
        progression: "Introduced in Week 2 once basic pelvic twist is comfortable.",
        imageKey: "advanced-pelvic-twist"
      },
      {
        name: "Nerve Flossing (Neuro-Mobilization)",
        why: "Mobilizes the sciatic nerve to reduce neural tension and improve leg symptoms.",
        instructions: [
          "Lie on your back with a belt or strap wrapped around the base of your toes.",
          "Phase 1: Pull the leg up toward you as far as you can with the knee straight and hold.",
          "Phase 2: Point the toes toward the ceiling, then use the belt to pull the foot down while keeping the knee straight.",
          "Repeat on the opposite side."
        ],
        dose: "5 reps × 2 sets each side, performed daily",
        keyCues: ["Keep the knee straight throughout", "Move slowly — this should not reproduce sharp pain"],
        regression: "Bend the knee slightly if the stretch is too intense.",
        painRule: "Stop if sharp, shooting pain radiates down the leg.",
        imageKey: "nerve-flossing-stenosis"
      },
      {
        name: "Pelvic Tilt (Supine)",
        why: "Activates the deep core and flattens the lumbar curve, reducing canal compression.",
        instructions: [
          "Lie on your back with knees bent, feet flat on the floor.",
          "Squeeze your buttock muscles together.",
          "Contract your lower abdominal muscles and tilt your pelvis toward you.",
          "Flatten your lower back against the floor.",
          "Hold this position — do not elevate your pelvis off the floor."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Think about pressing your belly button toward the floor", "Do not lift the pelvis"],
        progression: "Increase hold time by 1–2 seconds each week.",
        imageKey: "pelvic-tilt-supine"
      },
      {
        name: "Half Sit-Up",
        why: "Strengthens the anterior core to support the flexed lumbar posture.",
        instructions: [
          "Lie on your back with both knees bent, feet flat on the floor.",
          "Place your arms across your chest.",
          "Elevate your torso off the floor (partial sit-up).",
          "Hold this position."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Lift only until shoulder blades clear the floor", "Exhale as you lift"],
        progression: "Increase hold duration each week.",
        imageKey: "half-sit-up"
      },
      {
        name: "Side Sit-Up",
        why: "Strengthens the obliques and lateral core to improve trunk stability.",
        instructions: [
          "Lie on your right side with both knees bent.",
          "Bend your right arm, making a fist pointing to the ceiling, placing your right elbow against your body.",
          "Place your left open hand over the fist of the right hand.",
          "While pushing down with your left hand, elevate your torso.",
          "Hold this position, then repeat on the other side."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Use the push-down force to help elevate", "Keep knees bent for stability"],
        imageKey: "side-sit-up"
      },
      {
        name: "Side Hip Lift",
        why: "Strengthens hip abductors and improves pelvic stability for walking.",
        instructions: [
          "Lie on your right side.",
          "Bend your bottom knee and bring it toward your chest with your bottom hand.",
          "Raise your top leg (keeping it straight) about 12 inches above the mat, parallel to the floor. Hold.",
          "Move the straight leg toward your head about 45 degrees and hold.",
          "Bring your straight leg upward as far as you can and hold.",
          "Repeat on the opposite side."
        ],
        dose: "Hold 5–10 sec each position, repeat 5× each side, performed daily",
        keyCues: ["Keep the top leg straight throughout", "Three positions: parallel, 45°, and full elevation"],
        imageKey: "side-hip-lift"
      },
      {
        name: "Quadriceps Stretch (Side-Lying)",
        why: "Stretches the quadriceps and hip flexors, which can contribute to anterior pelvic tilt and stenosis symptoms.",
        instructions: [
          "Lie on your side.",
          "Bring your bottom bent knee up toward your chest with your bottom hand.",
          "Grasp the ankle of the top leg and pull it backward without arching your back.",
          "Hold this position, then repeat on the other side."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Do not arch your back", "Keep bottom knee pulled forward for stability"],
        imageKey: "quad-stretch-side-lying"
      },
      {
        name: "Back Leg Extension (Using Chair)",
        why: "Strengthens the gluteals and posterior chain in a supported, flexed position.",
        instructions: [
          "Place a chair with armrests against a wall.",
          "Lean forward and place hands on the armrests.",
          "Extend the right leg backward, keeping your knee straight.",
          "Lift your foot about 6 inches above the floor, hold for one second, then lower.",
          "Repeat on the opposite side."
        ],
        dose: "5–10 reps × 2 sets each side, performed daily",
        keyCues: ["Do not arch your back", "Small controlled movement — only 6 inches"],
        progression: "Progress to prone version (with pillows) when comfortable.",
        imageKey: "back-leg-ext-chair"
      },
      {
        name: "Back Leg Extension (Prone)",
        why: "Advanced glute and posterior chain strengthening in a supported prone position.",
        instructions: [
          "Place a stack of pillows or blankets (about 12 inches high) on the mat.",
          "Lie face down with your pelvis on the pillows.",
          "Lift one leg 6 inches off the mat, keeping your knee straight.",
          "Do not arch your back.",
          "Hold, then repeat on the opposite leg."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Pillows keep the spine in flexion", "Do not arch the back"],
        imageKey: "back-leg-ext-prone"
      },
      {
        name: "Torso Extension (Using Table)",
        why: "Strengthens the back extensors in a controlled range without excessive lumbar extension.",
        instructions: [
          "Stand in front of a table or desk with legs shoulder-width apart.",
          "Place hands behind your back.",
          "Lean forward until your nose touches the table/desk.",
          "Elevate your torso about 6 inches, hold for one second, then lower back down.",
          "Repeat."
        ],
        dose: "5–10 reps × 2 sets, performed daily",
        keyCues: ["Only 6 inches of movement", "Controlled tempo — no jerking"],
        progression: "Progress to prone version when comfortable.",
        imageKey: "torso-ext-table"
      },
      {
        name: "Torso Extension (Prone)",
        why: "Advanced back extensor strengthening in a supported prone position.",
        instructions: [
          "Place a stack of pillows or blankets (about 12 inches high) on the mat.",
          "Lie face down with your pelvis on the pillows.",
          "Place your hands behind your back.",
          "Keeping your back straight, lift your torso 6 inches off the mat.",
          "Do not arch your back. Hold this position."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Pillows maintain spinal flexion", "Lift only 6 inches"],
        imageKey: "torso-ext-prone"
      },
      {
        name: "Sit-Stand",
        why: "Functional strengthening exercise that improves ability to transfer from sitting to standing.",
        instructions: [
          "Sit at the edge of a chair with armrests, legs shoulder-width apart.",
          "Place hands on the armrests.",
          "Using your arms to assist if necessary, stand up from the chair while leaning forward.",
          "Then lower yourself back toward sitting slowly and hold."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Lean forward as you stand", "Lower yourself slowly — control the descent"],
        progression: "Reduce arm assistance over time.",
        imageKey: "sit-to-stand"
      },
      {
        name: "Sitting Forward Flex",
        why: "Stretches the lumbar spine in a flexion-dominant position, relieving canal compression.",
        instructions: [
          "Sit at the edge of a chair with legs shoulder-width apart.",
          "Grasp your ankles from the outside of the legs.",
          "Pull yourself downward toward the floor.",
          "You should feel a stretch in the lower back.",
          "Hold this position."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Grasp ankles from the outside", "Let gravity assist the stretch"],
        imageKey: "sitting-forward-flex"
      },
      {
        name: "Standing Pelvic Tilt",
        why: "Teaches pelvic control in a functional standing position, preparing for walking.",
        instructions: [
          "Stand with your feet shoulder-width apart.",
          "Squeeze your buttocks and perform the pelvic tilt.",
          "Avoid arching your back.",
          "Hold this position."
        ],
        dose: "Hold 5–10 sec, repeat 5×, performed daily",
        keyCues: ["Same concept as supine pelvic tilt, now upright", "Maintain throughout walking practice"],
        progression: "Use as the foundation for walking pelvic tilt exercise.",
        imageKey: "standing-pelvic-tilt"
      },
      {
        name: "Standing Groin Stretch",
        why: "Stretches the hip adductors and groin, improving hip mobility for walking.",
        instructions: [
          "Place a chair against a wall.",
          "Place one foot on the chair with the knee bent.",
          "The other leg should be straight and about 6 inches from the chair.",
          "While maintaining the pelvic tilt, lean forward by bending the knee on the chair.",
          "You should feel a stretch along the groin of the opposite (straight) leg.",
          "Hold, then repeat on the other side."
        ],
        dose: "Hold 5–10 sec, repeat 5× each side, performed daily",
        keyCues: ["Maintain pelvic tilt throughout", "Lean forward gently"],
        imageKey: "standing-groin-stretch"
      },
      {
        name: "Graduated Walking with Pelvic Tilt",
        why: "The ultimate functional goal — progressively increasing walking distance while maintaining optimal spinal posture.",
        instructions: [
          "Stand in the pelvic tilt position.",
          "While maintaining the pelvic tilt, attempt to walk normally, swinging your arms.",
          "Count your steps and aim to increase weekly.",
          "Rest when symptoms appear, then resume."
        ],
        dose: "Start with comfortable step count, increase weekly. Performed daily.",
        keyCues: ["Maintain pelvic tilt throughout", "Walk normally — swing arms", "Track your step count"],
        progression: "Increase step count by 10–20% each week as tolerated.",
        painRule: "Rest when leg symptoms appear; resume after symptoms settle.",
        important: "Avoid back extension activities — that is, arching your back backwards at all times during this program.",
        imageKey: "walking-pelvic-tilt"
      }
    ],
    programAudit: "Based on the Boot Camp Program for Lumbar Spinal Stenosis©. Evidence supports flexion-based exercise programs for symptomatic lumbar stenosis, with progressive walking as a key functional outcome measure."
  }
  // ── Piriformis Syndrome ──
  {
    id: "piriformis-syndrome",
    condition: "Piriformis Syndrome",
    goal: "Reduce buttock pain and sciatic-type irritation, improve hip strength, and restore normal movement control.",
    description: "A progressive program to reduce buttock and sciatic-type irritation, improve hip strength, and restore normal movement control.",
    bodyRegion: "hip-groin",
    symptoms: [
      "Deep buttock pain",
      "Sciatic-type leg pain",
      "Pain sitting",
      "Pain with hip rotation",
      "Buttock tightness"
    ],
    urgentSigns: [
      "Progressive leg weakness or foot drop",
      "Loss of bladder or bowel control",
      "Numbness in the groin or saddle area"
    ],
    exercises: [
      {
        name: "Supine Figure-4 Piriformis Stretch",
        why: "Gently lengthens the piriformis to reduce compression on the sciatic nerve.",
        instructions: [
          "Lie on your back with both knees bent.",
          "Cross the affected ankle over the other knee.",
          "Gently pull the opposite thigh toward your chest until a stretch is felt deep in the buttock.",
          "Do not force the movement."
        ],
        dose: "3 × 30-second holds, 1–2 times per day",
        keyCues: ["Keep hips relaxed on the floor", "Pull gently — no sharp pain"],
        progression: "Increase the stretch only slightly over time as tolerated.",
        painRule: "Mild stretch is acceptable. Stop if sharp or radiating pain occurs.",
        imageKey: "figure-4-stretch"
      },
      {
        name: "Seated Piriformis Stretch",
        why: "An accessible seated variation to improve piriformis flexibility throughout the day.",
        instructions: [
          "Sit tall in a chair.",
          "Cross the affected leg over the other.",
          "Lean forward slightly with a straight back until a stretch is felt in the buttock."
        ],
        dose: "3 × 30-second holds, 1–2 times per day",
        keyCues: ["Sit tall — don't round the back", "Lean from the hips"],
        progression: "Progress by increasing the forward lean slightly while staying comfortable.",
        painRule: "Should feel a comfortable stretch, not sharp pain.",
        imageKey: "figure-4-stretch"
      },
      {
        name: "Sciatic Nerve Glide",
        why: "Promotes healthy nerve mobility and reduces sciatic-type irritation.",
        instructions: [
          "Sit tall or lie on your back.",
          "Slowly straighten the affected knee while bringing the ankle up.",
          "Ease off and return to the start.",
          "This should feel like a gentle glide, not an aggressive stretch."
        ],
        dose: "2 × 10 reps, 1–2 times per day",
        keyCues: ["Smooth, rhythmic motion", "No bouncing or forcing"],
        progression: "Increase range gradually only if symptoms do not flare afterward.",
        painRule: "Stop if symptoms increase or radiate further down the leg.",
        imageKey: "nerve-slider"
      },
      {
        name: "Clamshell",
        why: "Strengthens the hip external rotators and gluteus medius to improve pelvic control.",
        instructions: [
          "Lie on your side with hips and knees bent.",
          "Keep your feet together and lift the top knee without rolling your pelvis backward."
        ],
        dose: "2–3 × 12–15 reps, 4–5 days per week",
        keyCues: ["Don't roll backward", "Control the movement"],
        progression: "Add a loop band above the knees when bodyweight becomes easy.",
        imageKey: "clamshell"
      },
      {
        name: "Side-Lying Hip Abduction",
        why: "Targets the gluteus medius to improve lateral hip stability.",
        instructions: [
          "Lie on your side with the bottom knee bent and the top leg straight.",
          "Lift the top leg slightly back and upward without turning the toes toward the ceiling."
        ],
        dose: "2–3 × 10–15 reps, 4–5 days per week",
        keyCues: ["Lead with the heel", "Keep pelvis stacked"],
        progression: "Add ankle weights or a loop band as tolerated.",
        imageKey: "side-lying-hip"
      },
      {
        name: "Bridge with Band Around Knees",
        why: "Combines glute strengthening with external rotation activation to improve hip control.",
        instructions: [
          "Lie on your back with knees bent and feet flat.",
          "Place a loop band around the knees.",
          "Press slightly outward into the band and lift the hips upward.",
          "Lower with control."
        ],
        dose: "2–3 × 10–12 reps, 4–5 days per week",
        keyCues: ["Press knees outward throughout", "Squeeze glutes at the top"],
        progression: "Progress to longer holds or single-leg bridge variations if tolerated.",
        imageKey: "bridge-band"
      }
    ],
    programAudit: "Based on established conservative exercise approaches for piriformis syndrome, combining mobility, nerve glide, and progressive hip strengthening. The exercise evidence base is less robust than some conditions, so this program focuses on the most widely used clinical approaches."
  },

  // ── Iliotibial Band Syndrome ──
  {
    id: "itband-syndrome",
    condition: "Iliotibial Band Syndrome",
    goal: "Reduce lateral knee pain and improve single-leg control through progressive hip and lower limb strengthening.",
    description: "A progressive hip and lower limb strengthening program to reduce lateral knee pain and improve single-leg control.",
    bodyRegion: "knee",
    symptoms: [
      "Lateral knee pain",
      "Pain with running",
      "Pain going downstairs",
      "Outside knee pain",
      "Pain with repetitive bending"
    ],
    urgentSigns: [
      "Significant knee swelling with no clear cause",
      "Knee locking or giving way",
      "Inability to bear weight"
    ],
    exercises: [
      {
        name: "Side-Lying Hip Abduction",
        why: "Strengthens the gluteus medius, which is commonly weak in IT band syndrome.",
        instructions: [
          "Lie on your side with the bottom knee bent and the top leg straight.",
          "Keep the top leg slightly behind the body and lift it upward without rolling the pelvis backward."
        ],
        dose: "3 × 12–15 reps, 4–5 days per week",
        keyCues: ["Lead with the heel", "Don't rotate the pelvis"],
        progression: "Add ankle weights as tolerated.",
        imageKey: "side-lying-hip"
      },
      {
        name: "Clamshell with Band",
        why: "Targets hip external rotators to improve lateral hip control.",
        instructions: [
          "Lie on your side with knees bent and a loop band around the thighs.",
          "Keep your feet together and lift the top knee while keeping your pelvis still."
        ],
        dose: "3 × 12–15 reps, 4–5 days per week",
        keyCues: ["Keep pelvis still", "Control the lowering phase"],
        progression: "Use a stronger band over time.",
        imageKey: "clamshell"
      },
      {
        name: "Lateral Band Walk",
        why: "Functional hip abductor strengthening to improve dynamic knee control.",
        instructions: [
          "Place a loop band around the ankles or above the knees.",
          "Bend slightly at the hips and knees.",
          "Take controlled side steps while keeping tension on the band."
        ],
        dose: "2–3 rounds of 8–12 steps each direction, 4 days per week",
        keyCues: ["Stay low", "Keep tension on the band throughout"],
        progression: "Increase band resistance or step count.",
        imageKey: "lateral-band-walk"
      },
      {
        name: "Single-Leg Squat to Chair",
        why: "Develops single-leg strength and knee alignment control.",
        instructions: [
          "Stand on one leg in front of a chair or box.",
          "Slowly squat down toward the chair and return to standing.",
          "Keep the knee aligned over the foot."
        ],
        dose: "2–3 × 6–10 reps, 3–4 days per week",
        keyCues: ["Don't let the knee cave inward", "Control the descent"],
        progression: "Lower the chair height or add light load when tolerated.",
        imageKey: "sit-to-stand"
      },
      {
        name: "Step-Down",
        why: "Builds eccentric quadriceps and hip control in a functional pattern.",
        instructions: [
          "Stand on a step on the affected leg.",
          "Slowly lower the opposite heel toward the floor, then return to the start.",
          "Keep the pelvis level and avoid the knee collapsing inward."
        ],
        dose: "2–3 × 8–12 reps, 3–4 days per week",
        keyCues: ["Keep pelvis level", "Knee tracks over foot"],
        progression: "Increase step height gradually.",
        imageKey: "step-down"
      },
      {
        name: "Single-Leg Romanian Deadlift",
        why: "Develops posterior chain strength and single-leg balance.",
        instructions: [
          "Stand on one leg and hinge forward at the hips while the other leg extends behind you.",
          "Keep your back straight and pelvis level.",
          "Return to standing."
        ],
        dose: "2–3 × 6–10 reps, 3 days per week",
        keyCues: ["Hinge at the hips", "Keep back flat"],
        progression: "Add a dumbbell or kettlebell as tolerated.",
        imageKey: "romanian-deadlift"
      }
    ],
    programAudit: "Based on established evidence supporting hip abductor strengthening and single-leg control training as the primary exercise-based treatment for iliotibial band syndrome."
  },

  // ── Achilles Tendinopathy ──
  {
    id: "achilles-tendinopathy",
    condition: "Achilles Tendinopathy",
    goal: "Improve calf strength, tendon capacity, and tolerance for walking, stairs, and sport.",
    description: "A tendon-loading program to improve calf strength, tendon capacity, and tolerance for walking, stairs, and sport.",
    bodyRegion: "ankle-foot",
    symptoms: [
      "Achilles tendon pain",
      "Morning stiffness in the tendon",
      "Pain with walking or running",
      "Tendon thickening",
      "Pain on stairs"
    ],
    urgentSigns: [
      "Sudden snap or pop in the tendon with immediate weakness",
      "Inability to push off or stand on toes",
      "Significant swelling or bruising around the ankle"
    ],
    exercises: [
      {
        name: "Standing Bilateral Calf Raise",
        why: "Initiates tendon loading at a manageable level using both legs.",
        instructions: [
          "Stand holding onto a support if needed.",
          "Rise up onto the balls of both feet.",
          "Pause briefly, then lower slowly."
        ],
        dose: "3 × 15 reps, daily",
        keyCues: ["Control the lowering phase", "Full range of motion"],
        progression: "Progress to single-leg calf raises when tolerated.",
        painRule: "Some tendon discomfort is acceptable if it remains manageable and settles by the next day.",
        imageKey: "calf-raise"
      },
      {
        name: "Isometric Calf Raise Hold",
        why: "Provides tendon loading with sustained holds, useful for pain management.",
        instructions: [
          "Rise onto the balls of both feet and hold the position.",
          "Keep weight evenly distributed unless instructed otherwise."
        ],
        dose: "5 × 30–45 second holds, daily",
        keyCues: ["Stay tall", "Breathe normally"],
        progression: "Progress to single-leg holds as tolerated.",
        painRule: "Aim for tolerable discomfort only.",
        imageKey: "calf-raise"
      },
      {
        name: "Straight-Knee Calf Raise",
        why: "Targets the gastrocnemius component of the calf for comprehensive tendon loading.",
        instructions: [
          "Stand on the floor or edge of a step.",
          "Keeping the knee straight, rise up onto the ball of the foot.",
          "Pause and lower slowly."
        ],
        dose: "3–4 × 8–15 reps, 3–5 days per week",
        keyCues: ["Keep knee straight", "Slow 3-second lower"],
        progression: "Progress from double-leg to single-leg, then add weight.",
        painRule: "Pain should remain manageable during and settle within 24 hours.",
        imageKey: "calf-raise"
      },
      {
        name: "Bent-Knee Calf Raise",
        why: "Targets the soleus muscle for deeper calf and tendon strengthening.",
        instructions: [
          "Perform a calf raise with the knees slightly bent.",
          "Rise up, pause, and lower slowly."
        ],
        dose: "3–4 × 8–15 reps, 3–5 days per week",
        keyCues: ["Keep knees bent throughout", "Slow controlled movement"],
        progression: "Add external load as tolerated.",
        painRule: "Tolerable discomfort is acceptable; sharp pain is not.",
        imageKey: "bent-knee-calf-raise"
      },
      {
        name: "Eccentric Heel Drop",
        why: "A cornerstone exercise for Achilles tendinopathy — loads the tendon eccentrically to promote remodelling.",
        instructions: [
          "Rise up with both feet.",
          "Shift weight to the affected side.",
          "Slowly lower down on that side.",
          "Use support as needed."
        ],
        dose: "3 × 15 reps, 1–2 times per day",
        keyCues: ["Slow controlled lowering", "Use both legs to rise up"],
        progression: "Increase load gradually with a backpack or dumbbell if tolerated.",
        painRule: "Some discomfort is expected; stop if pain is sharp or worsening.",
        imageKey: "eccentric-heel-drop"
      },
      {
        name: "Heavy Slow Resistance Calf Raise",
        why: "Progressive heavy loading to build tendon capacity and calf strength for return to activity.",
        instructions: [
          "Perform calf raises slowly using added weight such as a machine, dumbbell, backpack, or smith machine.",
          "Use both straight-knee and bent-knee versions."
        ],
        dose: "3–4 × 6–8 reps, 3 days per week",
        keyCues: ["3 seconds up, 3 seconds down", "Heavy but controlled"],
        progression: "Increase weight gradually while maintaining slow controlled form.",
        painRule: "Load should be challenging but pain should remain tolerable.",
        imageKey: "calf-raise"
      }
    ],
    programAudit: "Based on strong evidence supporting progressive tendon loading for Achilles tendinopathy, including eccentric heel drop programs (Alfredson protocol) and heavy slow resistance approaches (Kongsgaard et al.)."
  },

  // ── Patellofemoral Pain Syndrome ──
  {
    id: "patellofemoral-pain",
    condition: "Patellofemoral Pain Syndrome",
    goal: "Reduce kneecap-related pain and improve functional tolerance through combined hip and knee strengthening.",
    description: "A combined hip and knee strengthening program to reduce kneecap-related pain and improve functional tolerance.",
    bodyRegion: "knee",
    symptoms: [
      "Pain around or behind the kneecap",
      "Pain going up or down stairs",
      "Pain with squatting",
      "Pain sitting for long periods",
      "Knee pain with running"
    ],
    urgentSigns: [
      "Knee locking or giving way",
      "Significant swelling with no clear cause",
      "Inability to bear weight"
    ],
    exercises: [
      {
        name: "Spanish Squat or Wall Sit",
        why: "Isometric quadriceps loading that can reduce pain and build early strength.",
        instructions: [
          "For a Spanish squat, lean back into a strap or band positioned behind the knees and sit into a squat hold.",
          "For a wall sit, lean against a wall and hold a seated position at a tolerable bend angle."
        ],
        dose: "5 × 30–45 second holds, daily or before aggravating activity",
        keyCues: ["Find a tolerable knee angle", "Breathe normally throughout"],
        progression: "Increase hold time or depth gradually if tolerated.",
        painRule: "Pain should remain tolerable during and settle quickly after.",
        imageKey: "spanish-squat"
      },
      {
        name: "Straight Leg Raise",
        why: "Strengthens the quadriceps without significant kneecap loading.",
        instructions: [
          "Lie on your back with one knee bent and the affected leg straight.",
          "Tighten the thigh and lift the straight leg upward.",
          "Lower slowly."
        ],
        dose: "2–3 × 10–15 reps, 4–5 days per week",
        keyCues: ["Lock the knee straight", "Controlled lowering"],
        progression: "Add ankle weight when tolerated.",
        imageKey: "straight-leg-raise"
      },
      {
        name: "Knee Extension",
        why: "Progressive quadriceps strengthening in a controlled range.",
        instructions: [
          "Perform a controlled knee extension in a tolerable range using bodyweight, a band, or a machine.",
          "Avoid forcing painful range early on."
        ],
        dose: "2–3 × 10–15 reps, 3–4 days per week",
        keyCues: ["Work in a comfortable range", "Slow and controlled"],
        progression: "Increase resistance gradually.",
        painRule: "Avoid ranges that produce sharp kneecap pain.",
        imageKey: "leg-extension"
      },
      {
        name: "Clamshell or Side-Lying Hip Abduction",
        why: "Strengthens the hip abductors and external rotators to improve knee alignment.",
        instructions: [
          "Perform either clamshells or side-lying hip abduction with controlled movement.",
          "Target the hip abductors and external rotators."
        ],
        dose: "2–3 × 12–15 reps, 4–5 days per week",
        keyCues: ["Don't roll backward", "Control the movement"],
        progression: "Add band resistance or ankle weights over time.",
        imageKey: "clamshell"
      },
      {
        name: "Sit-to-Stand or Squat to Chair",
        why: "Functional quadriceps and hip strengthening with controlled depth.",
        instructions: [
          "Stand up from a chair and sit back down with control.",
          "Keep the knees aligned over the feet."
        ],
        dose: "2–3 × 8–12 reps, 3–4 days per week",
        keyCues: ["Push through the heels", "Control the descent"],
        progression: "Lower the chair height or add load as tolerated.",
        imageKey: "sit-to-stand"
      },
      {
        name: "Step-Down",
        why: "Develops eccentric quadriceps control in a functional pattern.",
        instructions: [
          "Stand on a step and slowly lower the opposite heel toward the floor.",
          "Keep the pelvis controlled and the knee tracking over the foot."
        ],
        dose: "2–3 × 6–10 reps, 3–4 days per week",
        keyCues: ["Keep pelvis level", "Knee over foot"],
        progression: "Increase the step height gradually.",
        imageKey: "step-down"
      },
      {
        name: "Forward Lunge or Split Squat",
        why: "Progressive single-leg strengthening for functional return.",
        instructions: [
          "Take a step forward or stagger the stance and lower under control.",
          "Use a shallow range initially.",
          "Keep the knee aligned over the foot."
        ],
        dose: "2–3 × 6–10 reps, 3 days per week",
        keyCues: ["Shallow range first", "Knee tracks over toes"],
        progression: "Increase depth and add load as tolerated.",
        painRule: "Reduce range if sharp kneecap pain occurs.",
        imageKey: "split-squat"
      }
    ],
    programAudit: "Based on strong evidence supporting combined hip and knee strengthening for patellofemoral pain syndrome. Guidelines recommend both proximal (hip) and local (quadriceps) strengthening alongside activity modification and patient education."
  }
];

export function getProgramsByRegion(region: BodyRegion): Program[] {
  return programs.filter(p => p.bodyRegion === region);
}

export function getProgramById(id: string): Program | undefined {
  return programs.find(p => p.id === id);
}

export function searchProgramsBySymptom(query: string): Program[] {
  const lower = query.toLowerCase();
  return programs.filter(p =>
    p.symptoms.some(s => s.toLowerCase().includes(lower)) ||
    p.condition.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower)
  );
}
