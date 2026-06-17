window.EMOPILOT_MOS_DATA = {
  "title": "EmoPilot MOS Audio Gallery",
  "summary": "Five representative MSP-Podcast target-emotion cases with GT references, retrieved prompts, and generated speech outputs.",
  "categories": [
    {
      "id": "01_Happy",
      "display": "Happy",
      "sourceFolder": "000_MSP-PODCAST_3231_1607",
      "queryIdx": "0",
      "fileName0": "MSP-PODCAST_3231_1607.wav",
      "fileNameGT": "MSP-PODCAST_3231_1778.wav",
      "officialLabel": "H",
      "vad": [
        "6",
        "6.2",
        "5.8"
      ],
      "transcript": "good to see you. i said, i'm taking philosophy classes this coming fall. well that sounds fun and boy, i tell you, i'm encouraged when i hear people say, express appreciation for fall...",
      "reference": {
        "name": "GT target audio",
        "type": "Reference",
        "note": "Paired target audio used as emotion reference.",
        "src": "01_Happy/GT.wav",
        "file": "GT.wav"
      },
      "retrieval": [
        {
          "name": "LLM-VAD Nearest",
          "type": "Prompt retrieval",
          "note": "LLM-predicted VAD nearest prompt.",
          "file": "LLM_VAD_ret.wav",
          "src": "01_Happy/ret/LLM_VAD_ret.wav"
        },
        {
          "name": "VAD-Transformer",
          "type": "Prompt retrieval",
          "note": "Audio0 + LLM-VAD transformer retrieved prompt.",
          "file": "VADPT_LLMVAD_ret.wav",
          "src": "01_Happy/ret/VADPT_LLMVAD_ret.wav"
        },
        {
          "name": "Text-Audio FFN",
          "type": "Prompt retrieval",
          "note": "Text/audio MLP retrieved prompt.",
          "file": "TextAudioFFN_ret.wav",
          "src": "01_Happy/ret/TextAudioFFN_ret.wav"
        },
        {
          "name": "Text-Prompt Transformer",
          "type": "Prompt retrieval",
          "note": "Text-prompt transformer retrieved prompt.",
          "file": "TextPromptTF_ret.wav",
          "src": "01_Happy/ret/TextPromptTF_ret.wav"
        },
        {
          "name": "Random prompt",
          "type": "Lower bound",
          "note": "Random seed-42 retrieved prompt.",
          "file": "Random_ret.wav",
          "src": "01_Happy/ret/Random_ret.wav"
        }
      ],
      "generation": [
        {
          "name": "IndexTTS2 no emotion",
          "type": "No-emotion baseline",
          "note": "Speaker prompt only.",
          "file": "IndexTTS2_SpeakerOnly_gen.wav",
          "src": "01_Happy/gen/IndexTTS2_SpeakerOnly_gen.wav"
        },
        {
          "name": "Qwen3-TTS no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "Qwen3TTS_gen.wav",
          "src": "01_Happy/gen/Qwen3TTS_gen.wav"
        },
        {
          "name": "FishAudio2 no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "FishAudio2_gen.wav",
          "src": "01_Happy/gen/FishAudio2_gen.wav"
        },
        {
          "name": "Random prompt + IndexTTS2",
          "type": "Lower bound",
          "note": "IndexTTS2 conditioned on random prompt.",
          "file": "Random_gen.wav",
          "src": "01_Happy/gen/Random_gen.wav"
        },
        {
          "name": "LLM-VAD nearest + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using LLM-VAD retrieved emotion prompt.",
          "file": "LLM_VAD_gen.wav",
          "src": "01_Happy/gen/LLM_VAD_gen.wav"
        },
        {
          "name": "VAD-Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using VAD-transformer retrieved emotion prompt.",
          "file": "VADPT_LLMVAD_gen.wav",
          "src": "01_Happy/gen/VADPT_LLMVAD_gen.wav"
        },
        {
          "name": "Text-Audio FFN + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using Text-Audio FFN prompt.",
          "file": "TextAudioFFN_gen.wav",
          "src": "01_Happy/gen/TextAudioFFN_gen.wav"
        },
        {
          "name": "Text-Prompt Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using text-prompt transformer prompt.",
          "file": "TextPromptTF_gen.wav",
          "src": "01_Happy/gen/TextPromptTF_gen.wav"
        },
        {
          "name": "VAD-Transformer direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted VAD-conditioned emotion embedding.",
          "file": "VADPT_LLMVAD_Direct_gen.wav",
          "src": "01_Happy/gen/VADPT_LLMVAD_Direct_gen.wav"
        },
        {
          "name": "Text-Prompt direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted text-conditioned emotion embedding.",
          "file": "TextPromptTF_Direct_gen.wav",
          "src": "01_Happy/gen/TextPromptTF_Direct_gen.wav"
        },
        {
          "name": "GT emotion prompt + IndexTTS2",
          "type": "Oracle upper bound",
          "note": "Uses paired GT audio as emotion prompt.",
          "file": "IndexTTS2_GTReference_gen.wav",
          "src": "01_Happy/gen/IndexTTS2_GTReference_gen.wav"
        }
      ]
    },
    {
      "id": "02_Angry",
      "display": "Angry",
      "sourceFolder": "029_MSP-PODCAST_4042_0190_0001",
      "queryIdx": "29",
      "fileName0": "MSP-PODCAST_4042_0190_0001.wav",
      "fileNameGT": "MSP-PODCAST_4042_0062_0001.wav",
      "officialLabel": "A",
      "vad": [
        "6.2",
        "1.6",
        "6.4"
      ],
      "transcript": "inflexible. when you're rigid, when you have a closed mind, when you're very methodical and you do the same thing the same way all the time.",
      "reference": {
        "name": "GT target audio",
        "type": "Reference",
        "note": "Paired target audio used as emotion reference.",
        "src": "02_Angry/GT.wav",
        "file": "GT.wav"
      },
      "retrieval": [
        {
          "name": "LLM-VAD Nearest",
          "type": "Prompt retrieval",
          "note": "LLM-predicted VAD nearest prompt.",
          "file": "LLM_VAD_ret.wav",
          "src": "02_Angry/ret/LLM_VAD_ret.wav"
        },
        {
          "name": "VAD-Transformer",
          "type": "Prompt retrieval",
          "note": "Audio0 + LLM-VAD transformer retrieved prompt.",
          "file": "VADPT_LLMVAD_ret.wav",
          "src": "02_Angry/ret/VADPT_LLMVAD_ret.wav"
        },
        {
          "name": "Text-Audio FFN",
          "type": "Prompt retrieval",
          "note": "Text/audio MLP retrieved prompt.",
          "file": "TextAudioFFN_ret.wav",
          "src": "02_Angry/ret/TextAudioFFN_ret.wav"
        },
        {
          "name": "Text-Prompt Transformer",
          "type": "Prompt retrieval",
          "note": "Text-prompt transformer retrieved prompt.",
          "file": "TextPromptTF_ret.wav",
          "src": "02_Angry/ret/TextPromptTF_ret.wav"
        },
        {
          "name": "Random prompt",
          "type": "Lower bound",
          "note": "Random seed-42 retrieved prompt.",
          "file": "Random_ret.wav",
          "src": "02_Angry/ret/Random_ret.wav"
        }
      ],
      "generation": [
        {
          "name": "IndexTTS2 no emotion",
          "type": "No-emotion baseline",
          "note": "Speaker prompt only.",
          "file": "IndexTTS2_SpeakerOnly_gen.wav",
          "src": "02_Angry/gen/IndexTTS2_SpeakerOnly_gen.wav"
        },
        {
          "name": "Qwen3-TTS no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "Qwen3TTS_gen.wav",
          "src": "02_Angry/gen/Qwen3TTS_gen.wav"
        },
        {
          "name": "FishAudio2 no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "FishAudio2_gen.wav",
          "src": "02_Angry/gen/FishAudio2_gen.wav"
        },
        {
          "name": "Random prompt + IndexTTS2",
          "type": "Lower bound",
          "note": "IndexTTS2 conditioned on random prompt.",
          "file": "Random_gen.wav",
          "src": "02_Angry/gen/Random_gen.wav"
        },
        {
          "name": "LLM-VAD nearest + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using LLM-VAD retrieved emotion prompt.",
          "file": "LLM_VAD_gen.wav",
          "src": "02_Angry/gen/LLM_VAD_gen.wav"
        },
        {
          "name": "VAD-Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using VAD-transformer retrieved emotion prompt.",
          "file": "VADPT_LLMVAD_gen.wav",
          "src": "02_Angry/gen/VADPT_LLMVAD_gen.wav"
        },
        {
          "name": "Text-Audio FFN + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using Text-Audio FFN prompt.",
          "file": "TextAudioFFN_gen.wav",
          "src": "02_Angry/gen/TextAudioFFN_gen.wav"
        },
        {
          "name": "Text-Prompt Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using text-prompt transformer prompt.",
          "file": "TextPromptTF_gen.wav",
          "src": "02_Angry/gen/TextPromptTF_gen.wav"
        },
        {
          "name": "VAD-Transformer direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted VAD-conditioned emotion embedding.",
          "file": "VADPT_LLMVAD_Direct_gen.wav",
          "src": "02_Angry/gen/VADPT_LLMVAD_Direct_gen.wav"
        },
        {
          "name": "Text-Prompt direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted text-conditioned emotion embedding.",
          "file": "TextPromptTF_Direct_gen.wav",
          "src": "02_Angry/gen/TextPromptTF_Direct_gen.wav"
        },
        {
          "name": "GT emotion prompt + IndexTTS2",
          "type": "Oracle upper bound",
          "note": "Uses paired GT audio as emotion prompt.",
          "file": "IndexTTS2_GTReference_gen.wav",
          "src": "02_Angry/gen/IndexTTS2_GTReference_gen.wav"
        }
      ]
    },
    {
      "id": "03_Sad",
      "display": "Sad",
      "sourceFolder": "030_MSP-PODCAST_4441_0055",
      "queryIdx": "30",
      "fileName0": "MSP-PODCAST_4441_0055.wav",
      "fileNameGT": "MSP-PODCAST_4444_0091.wav",
      "officialLabel": "S",
      "vad": [
        "5.8",
        "1.4",
        "2.4"
      ],
      "transcript": "ask for a car. i asked. i should have never asked. i'm just having a really hard time.",
      "reference": {
        "name": "GT target audio",
        "type": "Reference",
        "note": "Paired target audio used as emotion reference.",
        "src": "03_Sad/GT.wav",
        "file": "GT.wav"
      },
      "retrieval": [
        {
          "name": "LLM-VAD Nearest",
          "type": "Prompt retrieval",
          "note": "LLM-predicted VAD nearest prompt.",
          "file": "LLM_VAD_ret.wav",
          "src": "03_Sad/ret/LLM_VAD_ret.wav"
        },
        {
          "name": "VAD-Transformer",
          "type": "Prompt retrieval",
          "note": "Audio0 + LLM-VAD transformer retrieved prompt.",
          "file": "VADPT_LLMVAD_ret.wav",
          "src": "03_Sad/ret/VADPT_LLMVAD_ret.wav"
        },
        {
          "name": "Text-Audio FFN",
          "type": "Prompt retrieval",
          "note": "Text/audio MLP retrieved prompt.",
          "file": "TextAudioFFN_ret.wav",
          "src": "03_Sad/ret/TextAudioFFN_ret.wav"
        },
        {
          "name": "Text-Prompt Transformer",
          "type": "Prompt retrieval",
          "note": "Text-prompt transformer retrieved prompt.",
          "file": "TextPromptTF_ret.wav",
          "src": "03_Sad/ret/TextPromptTF_ret.wav"
        },
        {
          "name": "Random prompt",
          "type": "Lower bound",
          "note": "Random seed-42 retrieved prompt.",
          "file": "Random_ret.wav",
          "src": "03_Sad/ret/Random_ret.wav"
        }
      ],
      "generation": [
        {
          "name": "IndexTTS2 no emotion",
          "type": "No-emotion baseline",
          "note": "Speaker prompt only.",
          "file": "IndexTTS2_SpeakerOnly_gen.wav",
          "src": "03_Sad/gen/IndexTTS2_SpeakerOnly_gen.wav"
        },
        {
          "name": "Qwen3-TTS no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "Qwen3TTS_gen.wav",
          "src": "03_Sad/gen/Qwen3TTS_gen.wav"
        },
        {
          "name": "FishAudio2 no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "FishAudio2_gen.wav",
          "src": "03_Sad/gen/FishAudio2_gen.wav"
        },
        {
          "name": "Random prompt + IndexTTS2",
          "type": "Lower bound",
          "note": "IndexTTS2 conditioned on random prompt.",
          "file": "Random_gen.wav",
          "src": "03_Sad/gen/Random_gen.wav"
        },
        {
          "name": "LLM-VAD nearest + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using LLM-VAD retrieved emotion prompt.",
          "file": "LLM_VAD_gen.wav",
          "src": "03_Sad/gen/LLM_VAD_gen.wav"
        },
        {
          "name": "VAD-Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using VAD-transformer retrieved emotion prompt.",
          "file": "VADPT_LLMVAD_gen.wav",
          "src": "03_Sad/gen/VADPT_LLMVAD_gen.wav"
        },
        {
          "name": "Text-Audio FFN + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using Text-Audio FFN prompt.",
          "file": "TextAudioFFN_gen.wav",
          "src": "03_Sad/gen/TextAudioFFN_gen.wav"
        },
        {
          "name": "Text-Prompt Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using text-prompt transformer prompt.",
          "file": "TextPromptTF_gen.wav",
          "src": "03_Sad/gen/TextPromptTF_gen.wav"
        },
        {
          "name": "VAD-Transformer direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted VAD-conditioned emotion embedding.",
          "file": "VADPT_LLMVAD_Direct_gen.wav",
          "src": "03_Sad/gen/VADPT_LLMVAD_Direct_gen.wav"
        },
        {
          "name": "Text-Prompt direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted text-conditioned emotion embedding.",
          "file": "TextPromptTF_Direct_gen.wav",
          "src": "03_Sad/gen/TextPromptTF_Direct_gen.wav"
        },
        {
          "name": "GT emotion prompt + IndexTTS2",
          "type": "Oracle upper bound",
          "note": "Uses paired GT audio as emotion prompt.",
          "file": "IndexTTS2_GTReference_gen.wav",
          "src": "03_Sad/gen/IndexTTS2_GTReference_gen.wav"
        }
      ]
    },
    {
      "id": "04_LowMood_MSPFear",
      "display": "Low mood (MSP Fear)",
      "sourceFolder": "072_MSP-PODCAST_2412_0068",
      "queryIdx": "72",
      "fileName0": "MSP-PODCAST_2412_0068.wav",
      "fileNameGT": "MSP-PODCAST_2412_0312.wav",
      "officialLabel": "F",
      "vad": [
        "2.333333",
        "3.166667",
        "2.333333"
      ],
      "transcript": "for pro terrorists agendas. but if those people can't rely on any hosting platform to be able to do their work-",
      "reference": {
        "name": "GT target audio",
        "type": "Reference",
        "note": "Paired target audio used as emotion reference.",
        "src": "04_LowMood_MSPFear/GT.wav",
        "file": "GT.wav"
      },
      "retrieval": [
        {
          "name": "LLM-VAD Nearest",
          "type": "Prompt retrieval",
          "note": "LLM-predicted VAD nearest prompt.",
          "file": "LLM_VAD_ret.wav",
          "src": "04_LowMood_MSPFear/ret/LLM_VAD_ret.wav"
        },
        {
          "name": "VAD-Transformer",
          "type": "Prompt retrieval",
          "note": "Audio0 + LLM-VAD transformer retrieved prompt.",
          "file": "VADPT_LLMVAD_ret.wav",
          "src": "04_LowMood_MSPFear/ret/VADPT_LLMVAD_ret.wav"
        },
        {
          "name": "Text-Audio FFN",
          "type": "Prompt retrieval",
          "note": "Text/audio MLP retrieved prompt.",
          "file": "TextAudioFFN_ret.wav",
          "src": "04_LowMood_MSPFear/ret/TextAudioFFN_ret.wav"
        },
        {
          "name": "Text-Prompt Transformer",
          "type": "Prompt retrieval",
          "note": "Text-prompt transformer retrieved prompt.",
          "file": "TextPromptTF_ret.wav",
          "src": "04_LowMood_MSPFear/ret/TextPromptTF_ret.wav"
        },
        {
          "name": "Random prompt",
          "type": "Lower bound",
          "note": "Random seed-42 retrieved prompt.",
          "file": "Random_ret.wav",
          "src": "04_LowMood_MSPFear/ret/Random_ret.wav"
        }
      ],
      "generation": [
        {
          "name": "IndexTTS2 no emotion",
          "type": "No-emotion baseline",
          "note": "Speaker prompt only.",
          "file": "IndexTTS2_SpeakerOnly_gen.wav",
          "src": "04_LowMood_MSPFear/gen/IndexTTS2_SpeakerOnly_gen.wav"
        },
        {
          "name": "Qwen3-TTS no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "Qwen3TTS_gen.wav",
          "src": "04_LowMood_MSPFear/gen/Qwen3TTS_gen.wav"
        },
        {
          "name": "FishAudio2 no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "FishAudio2_gen.wav",
          "src": "04_LowMood_MSPFear/gen/FishAudio2_gen.wav"
        },
        {
          "name": "Random prompt + IndexTTS2",
          "type": "Lower bound",
          "note": "IndexTTS2 conditioned on random prompt.",
          "file": "Random_gen.wav",
          "src": "04_LowMood_MSPFear/gen/Random_gen.wav"
        },
        {
          "name": "LLM-VAD nearest + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using LLM-VAD retrieved emotion prompt.",
          "file": "LLM_VAD_gen.wav",
          "src": "04_LowMood_MSPFear/gen/LLM_VAD_gen.wav"
        },
        {
          "name": "VAD-Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using VAD-transformer retrieved emotion prompt.",
          "file": "VADPT_LLMVAD_gen.wav",
          "src": "04_LowMood_MSPFear/gen/VADPT_LLMVAD_gen.wav"
        },
        {
          "name": "Text-Audio FFN + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using Text-Audio FFN prompt.",
          "file": "TextAudioFFN_gen.wav",
          "src": "04_LowMood_MSPFear/gen/TextAudioFFN_gen.wav"
        },
        {
          "name": "Text-Prompt Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using text-prompt transformer prompt.",
          "file": "TextPromptTF_gen.wav",
          "src": "04_LowMood_MSPFear/gen/TextPromptTF_gen.wav"
        },
        {
          "name": "VAD-Transformer direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted VAD-conditioned emotion embedding.",
          "file": "VADPT_LLMVAD_Direct_gen.wav",
          "src": "04_LowMood_MSPFear/gen/VADPT_LLMVAD_Direct_gen.wav"
        },
        {
          "name": "Text-Prompt direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted text-conditioned emotion embedding.",
          "file": "TextPromptTF_Direct_gen.wav",
          "src": "04_LowMood_MSPFear/gen/TextPromptTF_Direct_gen.wav"
        },
        {
          "name": "GT emotion prompt + IndexTTS2",
          "type": "Oracle upper bound",
          "note": "Uses paired GT audio as emotion prompt.",
          "file": "IndexTTS2_GTReference_gen.wav",
          "src": "04_LowMood_MSPFear/gen/IndexTTS2_GTReference_gen.wav"
        }
      ]
    },
    {
      "id": "05_Neutral",
      "display": "Neutral",
      "sourceFolder": "092_MSP-PODCAST_0285_0919",
      "queryIdx": "92",
      "fileName0": "MSP-PODCAST_0285_0919.wav",
      "fileNameGT": "MSP-PODCAST_0285_0018.wav",
      "officialLabel": "N",
      "vad": [
        "4",
        "4.4",
        "3.6"
      ],
      "transcript": "and you can learn more about him as we just mentioned at his blog which is danandriacco.com. d-a-n-a-n-d-r-i-a-c-c-o.",
      "reference": {
        "name": "GT target audio",
        "type": "Reference",
        "note": "Paired target audio used as emotion reference.",
        "src": "05_Neutral/GT.wav",
        "file": "GT.wav"
      },
      "retrieval": [
        {
          "name": "LLM-VAD Nearest",
          "type": "Prompt retrieval",
          "note": "LLM-predicted VAD nearest prompt.",
          "file": "LLM_VAD_ret.wav",
          "src": "05_Neutral/ret/LLM_VAD_ret.wav"
        },
        {
          "name": "VAD-Transformer",
          "type": "Prompt retrieval",
          "note": "Audio0 + LLM-VAD transformer retrieved prompt.",
          "file": "VADPT_LLMVAD_ret.wav",
          "src": "05_Neutral/ret/VADPT_LLMVAD_ret.wav"
        },
        {
          "name": "Text-Audio FFN",
          "type": "Prompt retrieval",
          "note": "Text/audio MLP retrieved prompt.",
          "file": "TextAudioFFN_ret.wav",
          "src": "05_Neutral/ret/TextAudioFFN_ret.wav"
        },
        {
          "name": "Text-Prompt Transformer",
          "type": "Prompt retrieval",
          "note": "Text-prompt transformer retrieved prompt.",
          "file": "TextPromptTF_ret.wav",
          "src": "05_Neutral/ret/TextPromptTF_ret.wav"
        },
        {
          "name": "Random prompt",
          "type": "Lower bound",
          "note": "Random seed-42 retrieved prompt.",
          "file": "Random_ret.wav",
          "src": "05_Neutral/ret/Random_ret.wav"
        }
      ],
      "generation": [
        {
          "name": "IndexTTS2 no emotion",
          "type": "No-emotion baseline",
          "note": "Speaker prompt only.",
          "file": "IndexTTS2_SpeakerOnly_gen.wav",
          "src": "05_Neutral/gen/IndexTTS2_SpeakerOnly_gen.wav"
        },
        {
          "name": "Qwen3-TTS no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "Qwen3TTS_gen.wav",
          "src": "05_Neutral/gen/Qwen3TTS_gen.wav"
        },
        {
          "name": "FishAudio2 no emotion",
          "type": "No-emotion baseline",
          "note": "External speaker-cloning baseline.",
          "file": "FishAudio2_gen.wav",
          "src": "05_Neutral/gen/FishAudio2_gen.wav"
        },
        {
          "name": "Random prompt + IndexTTS2",
          "type": "Lower bound",
          "note": "IndexTTS2 conditioned on random prompt.",
          "file": "Random_gen.wav",
          "src": "05_Neutral/gen/Random_gen.wav"
        },
        {
          "name": "LLM-VAD nearest + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using LLM-VAD retrieved emotion prompt.",
          "file": "LLM_VAD_gen.wav",
          "src": "05_Neutral/gen/LLM_VAD_gen.wav"
        },
        {
          "name": "VAD-Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using VAD-transformer retrieved emotion prompt.",
          "file": "VADPT_LLMVAD_gen.wav",
          "src": "05_Neutral/gen/VADPT_LLMVAD_gen.wav"
        },
        {
          "name": "Text-Audio FFN + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using Text-Audio FFN prompt.",
          "file": "TextAudioFFN_gen.wav",
          "src": "05_Neutral/gen/TextAudioFFN_gen.wav"
        },
        {
          "name": "Text-Prompt Transformer + IndexTTS2",
          "type": "Prompt retrieval generation",
          "note": "Generated speech using text-prompt transformer prompt.",
          "file": "TextPromptTF_gen.wav",
          "src": "05_Neutral/gen/TextPromptTF_gen.wav"
        },
        {
          "name": "VAD-Transformer direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted VAD-conditioned emotion embedding.",
          "file": "VADPT_LLMVAD_Direct_gen.wav",
          "src": "05_Neutral/gen/VADPT_LLMVAD_Direct_gen.wav"
        },
        {
          "name": "Text-Prompt direct + IndexTTS2",
          "type": "Direct conditioning",
          "note": "Generated from predicted text-conditioned emotion embedding.",
          "file": "TextPromptTF_Direct_gen.wav",
          "src": "05_Neutral/gen/TextPromptTF_Direct_gen.wav"
        },
        {
          "name": "GT emotion prompt + IndexTTS2",
          "type": "Oracle upper bound",
          "note": "Uses paired GT audio as emotion prompt.",
          "file": "IndexTTS2_GTReference_gen.wav",
          "src": "05_Neutral/gen/IndexTTS2_GTReference_gen.wav"
        }
      ]
    }
  ],
  "counts": {
    "categories": 5,
    "retrievalPerCategory": 5,
    "generationPerCategory": 11
  }
};
