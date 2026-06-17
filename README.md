# EmoPilot MOS Listening-Test Audio Package

This package contains the five representative target-emotion cases selected for the current EmoPilot subjective evaluation.

## Target Evaluation Categories

The five listening categories are:

1. `01_Happy`
2. `02_Angry`
3. `03_Sad`
4. `04_LowMood_MSPFear`
5. `05_Neutral`

`04_LowMood_MSPFear` is officially labeled as Fear in MSP-Podcast, but we describe it as low mood because its perceived affect is closer to low-dominance unease than prototypical fear.

## Participant Profile

Same profile as the previous MOS package:

- Number of participants: 25
- Language background: native English speakers
- Age range: 18-60

## Package Structure

Each category folder contains:

- `GT.wav`: paired target audio used as the emotion reference.
- `transcript.txt`: target transcript.
- `ret/`: retrieved emotion prompt audios for R-MOS.
- `gen/`: generated speech audios for G-MOS.

The root files provide metadata:

- `index.html`: static GitHub Pages audio gallery for the full MOS package.
- `emotion_transcript_table.csv`: category, official MSP label/VAD, and transcript.
- `audio_manifest.csv`: every copied audio file, condition name, and source path.
- `mos_scoring_template.csv`: empty template for collecting listener ratings.

## Local Preview / GitHub Pages

From this folder:

```bash
python3 -m http.server 8088
```

Open:

```text
http://127.0.0.1:8088/
```

For GitHub Pages, publish the entire `MOS/` directory so the relative audio
paths used by `index.html` remain valid.

## Evaluation Protocol

This package uses positive MOS scoring, not ranking.

For each category:

1. Read `transcript.txt`.
2. Listen to `GT.wav` as the target emotion reference.
3. For files under `ret/`, assign an independent R-MOS score for emotional similarity to `GT.wav`.
4. For files under `gen/`, assign an independent G-MOS score for emotional similarity to `GT.wav` and emotional appropriateness for the transcript.
5. Reuse scores if needed; ties are allowed. Do not force a ranking.

## MOS Scale

| Score | Criterion |
|---:|---|
| 5 | Very good emotional match: clear, natural, and strongly aligned with the GT emotion. |
| 4 | Good emotional match: mostly aligned, with minor mismatch or mild artifacts. |
| 3 | Medium: partially aligned, but emotion is weak, ambiguous, or inconsistent. |
| 2 | Bad: poor emotional match, noticeably wrong emotion, or hard to judge. |
| 1 | Very bad: unintelligible, very unnatural, or emotionally unrelated to the GT reference. |

## What Participants Should Ignore

For R-MOS retrieved prompt audios:

- Ignore lexical/semantic content mismatch, because the retrieved prompt is not expected to say the target transcript.
- Focus on emotion, intensity, and speaking style relative to `GT.wav`.

For G-MOS generated audios:

- Focus on emotional similarity to `GT.wav` and whether the emotion fits the transcript.
- Do not reward a sample only for speaker similarity or audio loudness.
- Penalize severe intelligibility or audio-quality problems only when they prevent judging the emotion.

## Notes

- No explicit emotion label needs to be shown to participants during listening.
- The labels in `emotion_transcript_table.csv` are for experiment tracking and later analysis.
- The evaluation changed from the previous package: this version uses independent 1-5 MOS ratings instead of forced ranking.
