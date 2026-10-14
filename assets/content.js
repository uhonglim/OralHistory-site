// Real interview content imported without the previous site's UI.
// Radio artwork is illustrative; the interview remains a working draft.
const radioCatalog={"nanyang":{"file":"radio-nanyang-light.png","width":1426,"height":1103},"hongkong":{"file":"radio-hongkong-light.png","width":1560,"height":1008},"taiwan":{"file":"radio-taiwan-light.png","width":1612,"height":976},"mainland":{"file":"radio-mainland-light.png","width":1659,"height":948},"usa":{"file":"radio-usa-01.png","width":1635,"height":962},"canada":{"file":"radio-canada-light.png","width":1292,"height":1218},"australia":{"file":"radio-australia-light.png","width":1536,"height":1024},"uk":{"file":"radio-uk-light.png","width":1484,"height":1060},"france":{"file":"radio-france-01.png","width":1374,"height":1145},"japan":{"file":"radio-japan-01.png","width":1024,"height":1536}};
const interviews=[
  {
    "id": "01",
    "slug": "wang-grandfather",
    "radio": "mainland",
    "name": "From Anhai to Xiamen",
    "audio": "assets/interviews/wang-grandfather/audio/interview.mp3",
    "demo": false,
    "description": "He and his wife ran a garment workshop in Fujian. Their children’s schooling took the family to Xiamen.",
    "interviewer": "Wang Rong Xuan",
    "narrator": "Wang Rong Xuan’s grandfather",
    "language": "Hokkien and Mandarin",
    "reviewNote": "For review. The narrator has not yet approved publication of his name, voice or transcript.",
    "story": [
      {
        "title": "From Anhai to Xiamen",
        "text": "He and his wife moved their garment workshop to Anhai for trade. Their children’s schooling took them to Xiamen, first separating the family and later leaving the parents with a daily commute.",
        "caption": "Interview by Wang Rong Xuan · Hokkien and Mandarin"
      },
      {
        "title": "Making clothes",
        "text": "He and his wife started making clothes in their home village. She did the sewing; he bought fabric and handled the business. When fabric was hard to find, he approached older state-owned factories to ask them to produce it.\n\nMost of the clothes he remembers people wearing were dark. For summer, he wanted lighter fabric dyed in bright colours.",
        "quote": "People wore dark colours: jujube red, black, coffee brown. … What I wanted was something bright.",
        "quoteZh": "人家穿衣都是深色的：什么枣红啊，什么黑色，什么咖啡。……我要的就是那个鲜艳。",
        "clip": {
          "file": "audio/cloth.mp3",
          "session": 1,
          "start": "04:10",
          "length": "1:12",
          "zh": "人家穿衣都是深色的：什么枣红啊，什么黑色，什么咖啡。……我要的就是那个鲜艳。",
          "en": "People wore dark colours: jujube red, black, coffee brown. … What I wanted was something bright.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 250,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "The workshop in Anhai",
        "text": "Their children were already at school in the Anhai area when the couple decided to move the workshop there. He found it hard to do business in the village. Anhai had better roads and more trade, and it was easier to find out what was happening elsewhere.",
        "quote": "Moving to Anhai, we kept thinking of going forward. We hoped to change the surroundings and conditions we had for starting a business.",
        "quoteZh": "搬到安海镇，一心一心，一直奔往，一直向往前进。希望能改变，改变自己当时要创业的环境和条件。",
        "clip": {
          "file": "audio/anhai.mp3",
          "session": 1,
          "start": "07:31",
          "length": "1:28",
          "zh": "搬到安海镇，一心一心，一直奔往，一直向往前进。希望能改变，改变自己当时要创业的环境和条件。",
          "en": "Moving to Anhai, we kept thinking of going forward. We hoped to change the surroundings and conditions we had for starting a business.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 451,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "A home in Xiamen",
        "text": "They bought a flat in Xiamen so the children could go to school there. He thought the city offered a better education and a better environment. A written summary supplied with the recording dates the purchase to the 1990s; the year has not been confirmed.\n\nWang Rong Xuan’s father and aunt went to school in Xiamen. During high school, the father lived there on his own while his parents stayed at the factory in Jinjiang. The grandfather remembers the separation as difficult. He hoped the children would do well at school and that, one day, they would all be living together in Xiamen.\n\nSchool names, entry requirements and fees are still unconfirmed.",
        "quote": "Getting the children into school was the best thing, even if it meant more hardship for us.",
        "quoteZh": "孩子们能送去学校是最好的，哪怕我们辛苦一点。",
        "clip": {
          "file": "audio/school.mp3",
          "session": 1,
          "start": "14:57",
          "length": "0:43",
          "zh": "孩子们能送去学校是最好的，哪怕我们辛苦一点。",
          "en": "Getting the children into school was the best thing, even if it meant more hardship for us.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 897,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "Back to Jinjiang each morning",
        "text": "Eventually, he and his wife moved to Xiamen too. Every morning they drove back to the factory in Jinjiang and returned home at night. They kept this up for years.\n\nHe remembers how much the departure time mattered: leaving five minutes earlier could mean missing the traffic. The family still keeps the old Mercedes they drove to work.",
        "quote": "Grandpa and Grandma left Xiamen for work in Jinjiang every morning, then came back at night. For years, for many years.",
        "quoteZh": "爷爷奶奶是每天早上从厦门（出发），去晋江上班，晚上再回来。好多年了，很多年了。",
        "clip": {
          "file": "audio/car.mp3",
          "session": 2,
          "start": "02:48",
          "length": "1:00",
          "zh": "爷爷奶奶是每天早上从厦门（出发），去晋江上班，晚上再回来。好多年了，很多年了。",
          "en": "Grandpa and Grandma left Xiamen for work in Jinjiang every morning, then came back at night. For years, for many years.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 1133.44,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "The plan for Shanghai",
        "text": "Shanghai was another place he had hoped to take the business. That move never happened. He says they did not have the conditions to go, but the recording does not make clear what was missing.",
        "quote": "To develop in Shanghai, but the conditions were not enough. … The conditions were not enough.",
        "quoteZh": "去上海发展，但是也不够条件。……条件不够。",
        "clip": {
          "file": "audio/shanghai.mp3",
          "session": 1,
          "start": "13:04",
          "length": "1:12",
          "zh": "去上海发展，但是也不够条件。……条件不够。",
          "en": "To develop in Shanghai, but the conditions were not enough. … The conditions were not enough.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 784,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "Looking back",
        "text": "When Wang Rong Xuan asks what the family gained and lost by moving, his grandfather says it was all gain.\n\nHe does not think young people must always strike out, though he believes the family should support them. He values health, family and contentment.",
        "quote": "What does happiness mean? Today the sun is out and I feel glad; it rains and I still feel happy.",
        "quoteZh": "幸福什么意思？就是今天出太阳，我感觉很开心；下雨，我也感觉很高兴。",
        "clip": {
          "file": "audio/happiness.mp3",
          "session": 3,
          "start": "09:44",
          "length": "0:44",
          "zh": "幸福什么意思？就是今天出太阳，我感觉很开心；下雨，我也感觉很高兴。",
          "en": "What does happiness mean? Today the sun is out and I feel glad; it rains and I still feel happy.",
          "uncertain": true,
          "review_status": "needs_dialect_speaker"
        },
        "audioStart": 2004.928,
        "caption": "Excerpt translation awaiting review."
      },
      {
        "title": "Places in this conversation",
        "image": "assets/interviews/wang-grandfather/map.svg",
        "alt": "Map of Anhai, Jinjiang and Xiamen, with Shanghai in an inset.",
        "caption": "Anhai, Jinjiang and Xiamen, with Shanghai shown in the inset. Points mark towns and cities; connecting lines do not trace the family’s journeys. Coastline: Natural Earth. Coordinates: Anhai, Jinjiang, Xiamen, Shanghai."
      }
    ],
    "source": {
      "slug": "wang-grandfather",
      "status": "draft",
      "order": 1,
      "title": "Wang Rong Xuan’s grandfather",
      "title_zh": "Wang Rong Xuan 的祖父",
      "excerpt": "He and his wife ran a garment workshop in Fujian. Their children’s schooling took the family to Xiamen.",
      "narrator": {
        "display_name": "Wang Rong Xuan’s grandfather",
        "name": null,
        "name_zh": null,
        "born": null,
        "hometown": null,
        "occupation": "Garment workshop owner",
        "languages": [
          "Hokkien (Minnan)",
          "Mandarin"
        ],
        "portrait": null
      },
      "interviewer": {
        "name": "Wang Rong Xuan",
        "name_zh": null,
        "relation": "grandchild"
      },
      "interview": {
        "date": "To be confirmed",
        "place": null,
        "length": "35 min 48 sec",
        "recording": "One interview recorded in three parts",
        "language": "Hokkien and Mandarin",
        "consent": "pending",
        "consent_note": "For review. The narrator has not yet approved publication of his name, voice or transcript."
      },
      "publication": {
        "family_reviewed": false,
        "text": false,
        "voice": false,
        "images": false,
        "attribution": false
      },
      "categories": {
        "place": [
          "Fujian"
        ],
        "era": [
          "Reform era",
          "1990s (date uncertain)"
        ],
        "theme": [
          "Family business",
          "Schooling",
          "Family separation"
        ]
      },
      "tags": [
        "Anhai",
        "Jinjiang",
        "Xiamen",
        "Shanghai",
        "安海",
        "晋江",
        "厦门",
        "上海",
        "教育",
        "闽南语"
      ],
      "bio": [
        "He and his wife moved their garment workshop to Anhai for trade. Their children’s schooling took them to Xiamen, first separating the family and later leaving the parents with a daily commute."
      ],
      "route": [
        {
          "name": "Home village",
          "zh": "老家",
          "when": "Date unknown",
          "kind": "reached",
          "note": "He and his wife started their workshop in their home village. Its name is still unconfirmed."
        },
        {
          "name": "Anhai",
          "zh": "安海",
          "when": "Date unknown",
          "kind": "reached",
          "note": "They moved the workshop to Anhai, where roads and trading conditions were better."
        },
        {
          "name": "Xiamen",
          "zh": "厦门",
          "when": "Year unconfirmed",
          "kind": "reached",
          "note": "They bought a flat for the children’s schooling, then later moved in themselves and travelled back to Jinjiang for work."
        },
        {
          "name": "Shanghai",
          "zh": "上海",
          "when": "A plan that did not go ahead",
          "kind": "missed",
          "note": "He also considered Shanghai. He says they did not have the conditions to move there, without specifying what was missing."
        },
        {
          "name": "Next generation",
          "zh": "下一代",
          "when": "Later, dates unknown",
          "kind": "next",
          "note": "Wang Rong Xuan mentions Shanghai, Hong Kong and overseas destinations. This part of the family’s history needs a separate interview."
        }
      ],
      "question": {
        "text": "Why did the family move to Anhai, and later to Xiamen?",
        "note": "Anhai offered better conditions for the workshop. In Xiamen, his priority was the children’s education."
      },
      "chapters": [
        {
          "id": "cloth",
          "title": "Making clothes",
          "title_zh": "做衣服",
          "body": [
            "He and his wife started making clothes in their home village. She did the sewing; he bought fabric and handled the business. When fabric was hard to find, he approached older state-owned factories to ask them to produce it.",
            "Most of the clothes he remembers people wearing were dark. For summer, he wanted lighter fabric dyed in bright colours."
          ],
          "clip": {
            "file": "audio/cloth.mp3",
            "session": 1,
            "start": "04:10",
            "length": "1:12",
            "zh": "人家穿衣都是深色的：什么枣红啊，什么黑色，什么咖啡。……我要的就是那个鲜艳。",
            "en": "People wore dark colours: jujube red, black, coffee brown. … What I wanted was something bright.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": {
            "type": "swatches",
            "before": {
              "caption": "Colours he remembers seeing. Approximate illustration.",
              "items": [
                {
                  "zh": "枣红",
                  "en": "Jujube red",
                  "color": "#682932"
                },
                {
                  "zh": "黑色",
                  "en": "Black",
                  "color": "#282a2f"
                },
                {
                  "zh": "咖啡",
                  "en": "Coffee brown",
                  "color": "#695044"
                }
              ]
            },
            "after": {
              "caption": "Colours he describes making. Approximate illustration.",
              "items": [
                {
                  "zh": "红色",
                  "en": "Red",
                  "color": "#d44448"
                },
                {
                  "zh": "水红",
                  "en": "Watermelon red",
                  "color": "#f18594"
                },
                {
                  "zh": "绿色",
                  "en": "Green",
                  "color": "#68aa6c"
                },
                {
                  "zh": "黄色",
                  "en": "Yellow",
                  "color": "#e9c34e"
                }
              ]
            }
          }
        },
        {
          "id": "anhai",
          "title": "The workshop in Anhai",
          "title_zh": "安海的作坊",
          "body": [
            "Their children were already at school in the Anhai area when the couple decided to move the workshop there. He found it hard to do business in the village. Anhai had better roads and more trade, and it was easier to find out what was happening elsewhere."
          ],
          "clip": {
            "file": "audio/anhai.mp3",
            "session": 1,
            "start": "07:31",
            "length": "1:28",
            "zh": "搬到安海镇，一心一心，一直奔往，一直向往前进。希望能改变，改变自己当时要创业的环境和条件。",
            "en": "Moving to Anhai, we kept thinking of going forward. We hoped to change the surroundings and conditions we had for starting a business.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": null
        },
        {
          "id": "school",
          "title": "A home in Xiamen",
          "title_zh": "在厦门安家",
          "body": [
            "They bought a flat in Xiamen so the children could go to school there. He thought the city offered a better education and a better environment. A written summary supplied with the recording dates the purchase to the 1990s; the year has not been confirmed.",
            "Wang Rong Xuan’s father and aunt went to school in Xiamen. During high school, the father lived there on his own while his parents stayed at the factory in Jinjiang. The grandfather remembers the separation as difficult. He hoped the children would do well at school and that, one day, they would all be living together in Xiamen.",
            "School names, entry requirements and fees are still unconfirmed."
          ],
          "clip": {
            "file": "audio/school.mp3",
            "session": 1,
            "start": "14:57",
            "length": "0:43",
            "zh": "孩子们能送去学校是最好的，哪怕我们辛苦一点。",
            "en": "Getting the children into school was the best thing, even if it meant more hardship for us.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": null
        },
        {
          "id": "car",
          "title": "Back to Jinjiang each morning",
          "title_zh": "每天早上回晋江上班",
          "body": [
            "Eventually, he and his wife moved to Xiamen too. Every morning they drove back to the factory in Jinjiang and returned home at night. They kept this up for years.",
            "He remembers how much the departure time mattered: leaving five minutes earlier could mean missing the traffic. The family still keeps the old Mercedes they drove to work."
          ],
          "clip": {
            "file": "audio/car.mp3",
            "session": 2,
            "start": "02:48",
            "length": "1:00",
            "zh": "爷爷奶奶是每天早上从厦门（出发），去晋江上班，晚上再回来。好多年了，很多年了。",
            "en": "Grandpa and Grandma left Xiamen for work in Jinjiang every morning, then came back at night. For years, for many years.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": null
        },
        {
          "id": "shanghai",
          "title": "The plan for Shanghai",
          "title_zh": "去上海的计划",
          "body": [
            "Shanghai was another place he had hoped to take the business. That move never happened. He says they did not have the conditions to go, but the recording does not make clear what was missing."
          ],
          "clip": {
            "file": "audio/shanghai.mp3",
            "session": 1,
            "start": "13:04",
            "length": "1:12",
            "zh": "去上海发展，但是也不够条件。……条件不够。",
            "en": "To develop in Shanghai, but the conditions were not enough. … The conditions were not enough.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": null
        },
        {
          "id": "happiness",
          "title": "Looking back",
          "title_zh": "回顾这些年",
          "body": [
            "When Wang Rong Xuan asks what the family gained and lost by moving, his grandfather says it was all gain.",
            "He does not think young people must always strike out, though he believes the family should support them. He values health, family and contentment."
          ],
          "clip": {
            "file": "audio/happiness.mp3",
            "session": 3,
            "start": "09:44",
            "length": "0:44",
            "zh": "幸福什么意思？就是今天出太阳，我感觉很开心；下雨，我也感觉很高兴。",
            "en": "What does happiness mean? Today the sun is out and I feel glad; it rains and I still feel happy.",
            "uncertain": true,
            "review_status": "needs_dialect_speaker"
          },
          "figure": null
        }
      ],
      "comparison": {
        "heading": "Anhai and Xiamen",
        "columns": [
          "Move to Anhai",
          "Home in Xiamen"
        ],
        "rows": [
          {
            "label": "Reason given",
            "cells": [
              "Better roads, trade and access to information for the workshop.",
              "The children’s education."
            ]
          },
          {
            "label": "Schooling",
            "cells": [
              "The children were already attending school in the Anhai area.",
              "Wang Rong Xuan’s father and aunt attended school in Xiamen. The eldest uncle’s schooling is unconfirmed."
            ]
          },
          {
            "label": "Family arrangements",
            "cells": [
              "The grandparents moved the workshop from their village.",
              "The children went first. The grandparents later moved to Xiamen and travelled back to the factory for work."
            ]
          },
          {
            "label": "What remains unknown",
            "cells": [
              "The village, year, costs and the grandmother’s account of the decision.",
              "The purchase year, schools, entry requirements, fees and years spent living apart."
            ]
          }
        ],
        "note": "Based on the first two recordings and the accompanying summary. Dates still need confirmation."
      },
      "open_questions": [
        "What stopped the Shanghai move? What does he remember of discussing or planning it?",
        "Which schools did the children attend in Xiamen? How did the family choose them?",
        "What did enrolment cost, and what documents were required? Did buying the flat change the family’s household registration?",
        "When was the Xiamen flat bought? When did the grandparents move in?",
        "Where did the eldest uncle go to school?",
        "What was the name of the home village? Does the recording mention Dongshi?",
        "How does the grandmother remember running the workshop and raising the children?",
        "Who is speaking in the discussion of the car’s mileage? What does the odometer show?",
        "Who wrote the accompanying summary? Which passages are quotations, and which are paraphrases?"
      ],
      "context": {
        "heading": "Further reading",
        "paragraphs": [
          "The teacher’s reading list includes Dorothy Solinger’s <i>Contesting Citizenship in Urban China</i> (1999). It may help with questions about the documents, fees and residence arrangements the family needed for schooling in Xiamen. These details are missing from the interview.",
          "Vanessa Fong’s <i>Paradise Redefined</i> (2011) examines Chinese students studying abroad. It is a possible reference for a later interview about the younger generations. Their experiences outside Fujian have not yet been recorded here."
        ],
        "references": [
          "Solinger, Dorothy J. 1999. <i>Contesting Citizenship in Urban China: Peasant Migrants, the State, and the Logic of the Market</i>. University of California Press. <a href=\"https://www.ucpress.edu/books/contesting-citizenship-in-urban-china/paper\">Publisher</a>.",
          "Fong, Vanessa L. 2011. <i>Paradise Redefined: Transnational Chinese Students and the Quest for Flexible Citizenship in the Developed World</i>. Stanford University Press. <a href=\"https://openlibrary.org/isbn/9780804772679\">Catalogue</a>.",
          "Interview with Wang Rong Xuan’s grandfather, recorded in three parts; files received October 2026. Interview date and place unconfirmed. Accompanying written summary, author unconfirmed."
        ]
      },
      "photos": [
        {
          "file": null,
          "caption": "The narrator today",
          "wanted": "A portrait approved by the grandfather, with his chosen public name."
        },
        {
          "file": null,
          "caption": "The garment workshop",
          "wanted": "A photograph from the workshop years, with date, location and names."
        },
        {
          "file": null,
          "caption": "The old Mercedes",
          "wanted": "The car and, separately, its odometer. Please confirm the photograph date."
        },
        {
          "file": null,
          "caption": "Anhai and Xiamen homes",
          "wanted": "An old home photograph or exterior view; agree what location may be made public."
        },
        {
          "file": null,
          "caption": "School years",
          "wanted": "A school photograph or document approved for use, with private details removed."
        }
      ],
      "credits": [
        {
          "role": "Interview",
          "who": "Wang Rong Xuan"
        },
        {
          "role": "Project lead and website",
          "who": "Alan Lin"
        },
        {
          "role": "Transcription",
          "who": "Breeze-ASR-26 and Qwen3-ASR-1.7B; edited draft awaiting a Hokkien speaker’s review."
        },
        {
          "role": "Translation and editorial draft",
          "who": "AI-assisted; awaiting review by the interviewer and family."
        }
      ],
      "method_notes": [
        "The interview was recorded in three parts: 16:05, 07:35 and 12:08. This page uses six excerpts. The originals are preserved locally.",
        "The date, place and full list of people present are unconfirmed. The grandmother is mentioned as present, and another voice may be heard.",
        "The Chinese transcript was prepared from Breeze-ASR-26 output and an accompanying written summary. On 10 October 2026, the six excerpts and selected uncertain passages were compared with Qwen3-ASR-1.7B output. A Hokkien speaker still needs to check the recording.",
        "The English translation and editorial text were drafted with AI assistance and await review by the interviewer and family. The written summary’s author is unconfirmed.",
        "The home village and the year of the Xiamen flat purchase remain uncertain. The car’s mileage is discussed as both 600,000 and 400,000 kilometres, ending with “400,000-something”; the speaker and figure need checking. Neither figure establishes the distance driven for work. A passage about character in part 3 is also unclear.",
        "The narrator has not yet approved publication. Sensitive or unclear passages need his review."
      ],
      "citation": "Wang Rong Xuan’s grandfather, interviewed by Wang Rong Xuan. Date and place to be confirmed; files received October 2026. Audio, 35 min 48 sec, in three parts. Moving for the Next Generation. Working draft, not cleared for publication.",
      "transcript_legend": "Parentheses: wording supplied by the editor. Bracketed ellipsis: unclear words omitted. Ellipsis: cut between excerpts. “Unclear”: words not understood. Question mark: uncertain wording.",
      "map": {
        "type": "map",
        "file": "map.svg",
        "caption": "Anhai, Jinjiang and Xiamen, with Shanghai shown in the inset. Points mark towns and cities; connecting lines do not trace the family’s journeys. Coastline: <a href=\"https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-land/\">Natural Earth</a>. Coordinates: <a href=\"https://en.wikipedia.org/wiki/Anhai\">Anhai</a>, <a href=\"https://en.wikipedia.org/wiki/Jinjiang,_Fujian\">Jinjiang</a>, <a href=\"https://en.wikipedia.org/wiki/Xiamen\">Xiamen</a>, <a href=\"https://en.wikipedia.org/wiki/Shanghai\">Shanghai</a>."
      },
      "subtitle": "From Anhai to Xiamen"
    },
    "transcript": {
      "sessions": [
        {
          "id": "s1",
          "label": "Part 1",
          "duration": "16:05",
          "segments": [
            {
              "t": "00:05",
              "speaker": "Grandfather",
              "zh": "［……］不是那么好看的景象。那个农村大概就是那样子。",
              "en": "[…] not a pretty sight. That's about what the countryside was like.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:16",
              "speaker": "Wang Rong Xuan",
              "zh": "那在那个年代，普通人家最大的期望是什么？",
              "en": "And back then, what did ordinary families hope for most?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:23",
              "speaker": "Grandfather",
              "zh": "普通的人家最大的希望，就是日子稍微能过得好一点，有房子住，有脚踏车，那就很高兴了。",
              "en": "What ordinary families hoped for most was just for life to get a little better: a house to live in, a bicycle. That made people very happy.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:57",
              "speaker": "Wang Rong Xuan",
              "zh": "是什么原因让你们决定离开故乡呢？",
              "en": "What made you decide to leave your hometown?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:03",
              "speaker": "Grandfather",
              "zh": "我跟奶奶，各自从小都是比较有志气的。一直觉得，人不能这样子活，要走出去。［……］比较有思想，是不能这样子活的。只有靠天吃饭是不行的。",
              "en": "Grandma and I had both been ambitious since we were young. We always felt people couldn't live like this; you had to get out. […] we had our own ideas: you can't live like this. Just depending on the weather to eat doesn't work.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:36",
              "speaker": "Grandfather",
              "zh": "（自从）我跟奶奶结婚，我就开始拼命地创业。七九年（?）改革开放，也就开始了。我先插这一条，目标就是为了这个。［听不清］……我的理想，都有机会插进去。",
              "en": "(After) Grandma and I married, I started building a business with everything I had. In '79 (?) came Reform and Opening, and that's when it began. I got into this line first; that was the whole aim. [inaudible] … my ideals all had a chance to get in.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker",
              "review_note": "The year is uncertain in the recording. It is not a verified date for the start of national reforms."
            },
            {
              "t": "02:23",
              "speaker": "Grandfather",
              "zh": "当时只听说“先富光荣”，（我）跟奶奶就开始——可以办厂了——自己开始做服装。做服装，当时社会上大部分的人都不懂。可是你奶奶，首先她会做，",
              "en": "At the time, all you heard was \"getting rich first is glorious\" [先富光荣, xiān fù guāng róng]. So Grandma and (I) started. You were allowed to set up a workshop now, and we began making clothes ourselves. Making clothes: most people back then didn't know how. But your grandma, first of all, she knew how to make them,",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "03:02",
              "speaker": "Grandfather",
              "zh": "坐在这里做衣服。我首先就是懂得怎么做生意，我一般比人家聪明：要怎么做生意，怎么买布，怎么来跟奶奶（讲）怎么做。就这样。我当初要拿布，没有地方（拿），所以我也比较聪明，",
              "en": "sitting here sewing. And me, first of all, I understood how to do business. I was generally a bit smarter than others about it: how to run a business, how to buy cloth, how to tell Grandma what to make. That's how it was. In the beginning, when I needed cloth, there was nowhere to get it, so, being fairly clever,",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "03:34",
              "speaker": "Grandfather",
              "zh": "去找那些老厂、以前的国营企业，去跟他们谈，说：你来给我生产这种布、那种布、那样的布。我又懂得［……］。所以以前……人家穿的衣服都是那种颜色的，你们都没看到过，",
              "en": "I went to the old factories, the state-owned enterprises of the time, and negotiated with them: you produce this cloth for me, that cloth, that kind of cloth. And I also understood […]. Back then, the clothes people wore were all that kind of colour. You never saw it,",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:12",
              "speaker": "Grandfather",
              "zh": "我看那里面，人家穿衣都是深色的：什么枣红啊，什么黑色，什么咖啡。所以［……］改革开放了，我要的就是那个鲜艳。",
              "en": "The way I saw it, everything people wore was dark: jujube red, black, coffee brown. So […] once Reform and Opening came, what I wanted was brightness.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:45",
              "speaker": "Grandfather",
              "zh": "（这）可以叫做鲜艳的。用什么方式？就是用鲜艳的。夏天又不能（用）厚的布料，就是要薄的，薄的染浅色的：红色的、水红的、绿色的、黄色的，薄一点，染这些鲜艳的颜色起来。",
              "en": "That's what you'd call bright. How? With bright colours. And in summer you can't use thick fabric; it has to be thin. Thin cloth dyed in light colours: red, watermelon red, green, yellow, a bit thinner, dyed in these bright colours.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "05:18",
              "speaker": "Grandfather",
              "zh": "“哇，很漂亮！”［……］后面的供应商……设计没人懂得去开发。［听不清］我不敢像人家那样走私，我不敢。走私，边防要抓你的。",
              "en": "\"Wow, so pretty!\" […] the suppliers behind us… nobody knew how to develop designs. [inaudible] I didn't dare smuggle like others did. I didn't dare. With smuggling, the border guards would arrest you.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker",
              "review_note": "Uncertain passage; ask the narrator to review wording and permission before any public use."
            },
            {
              "t": "05:50",
              "speaker": "Grandfather",
              "zh": "［部分听不清］人一生是有用的，我不敢这样。（有人）去海边，跟香港那边［……］，吓死人。",
              "en": "[partly inaudible] A life is worth something; I didn't dare do that. (People) went down to the seaside, (dealing) with Hong Kong […]. It was terrifying.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "Uncertain passage; ask the narrator to review wording and permission before any public use."
            },
            {
              "t": "06:21",
              "speaker": "Grandfather",
              "zh": "到海边去跟台湾人接触，边防又要抓你。［……］所以没办法，逼出来就是办法。所以我回头就走，［……］开发这些布料。开发了，才（有）大量的［……］。",
              "en": "(They'd) go to the seaside to meet Taiwanese traders, and the border guards would come after you. […] So there was no choice. When you're forced into a corner, that's how you find a way. So I turned straight around, […] developing these fabrics. Once they were developed, then came large volumes […].",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "Uncertain passage; ask the narrator to review wording and permission before any public use."
            },
            {
              "t": "06:57",
              "speaker": "Grandfather",
              "zh": "［听不清］",
              "en": "[inaudible]",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:18",
              "speaker": "Wang Rong Xuan",
              "zh": "那我们现在转移到下一个问题。在准备离开故乡之前，家里会有什么纠结或忐忑吗？",
              "en": "Let's move on to the next question. When you were getting ready to leave home, was there any hesitation or anxiety in the family?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:28",
              "speaker": "Grandfather",
              "zh": "纠结、忐忑，这些倒是没有。",
              "en": "Hesitation, anxiety: no, there wasn't any of that.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:33",
              "speaker": "Grandfather",
              "zh": "那时你爸爸、你姑姑，还有你大伯，都送往安海乡镇去读书的。（我跟）奶奶一直想要发展，一定要赶紧搬出去，所以才搬到安海镇上。搬到安海镇，一心一心，一直奔往，一直向往前进。",
              "en": "At that time your dad, your aunt and your eldest uncle had all been sent to school in Anhai, in the township. Grandma (and I) always wanted to get ahead; we had to move out as soon as we could, and that's why we moved into Anhai town. Moving to Anhai, single-minded, always pushing on, always heading forward.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "08:22",
              "speaker": "Grandfather",
              "zh": "希望能改变，改变自己当时要创业的环境和条件。在农村那么闭塞，做什么都走投无路。直到那个靠近，靠近公路旁边，才是最好的，你才能走得出去。",
              "en": "We hoped to change things, to change the conditions we had for starting a business. The village was so closed off; whatever you tried, you hit a dead end. Only being near, near the main road, was best. Only then could you get out.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "08:59",
              "speaker": "Grandfather",
              "zh": "做生意，走出去的方向也比较有兴趣，比较有兴趣走出去，所以就没什么纠结。有条件搬迁，（把）农村的小厂搬到镇上，多么的高兴！",
              "en": "Doing business, I was more drawn to going out, keen to get out, so there was no hesitation. Being able to move, moving our little village workshop into town: how happy we were!",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "09:32",
              "speaker": "Wang Rong Xuan",
              "zh": "那为什么选了安海呢？",
              "en": "And why did you choose Anhai?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "09:36",
              "speaker": "Grandfather",
              "zh": "当时的条件有限。当时那个时代，［……］算是有钱了，但是尽管有钱，［……］要搬，要从东石镇（?）搬到安海镇。所以这样子，安海镇那边，南北东西通商比较好，信息、公路这些都比较便利。",
              "en": "Our conditions were limited back then. In that era we […] counted as having money, but even with money, […] moving, moving from Dongshi (?) to Anhai. So, Anhai: trade north-south and east-west was better there, and information, roads, all that was more convenient.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "10:24",
              "speaker": "Wang Rong Xuan",
              "zh": "那后来为什么又落脚在厦门？",
              "en": "And later, why did you end up settling in Xiamen?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "10:28",
              "speaker": "Grandfather",
              "zh": "这个年代（来了），以后的下一代，你大伯、你姑姑、你爸爸，［……］一定要找一个好的地方去。所以正好一个机会，［“零三年”?］九十年代，九十年代中，在厦门［听不清］……到九八年［听不清］。",
              "en": "As the times changed, for the next generation, your uncle, your aunt, your dad, […] we had to find a good place to go. And there happened to be an opportunity: [sounds like \"'03\"?] the nineties, the mid-nineties, in Xiamen [inaudible] … by '98 [inaudible].",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "The written summary places the flat purchase in the 1990s; machine readings also contain “2003”. Confirm the year with the family."
            },
            {
              "t": "11:41",
              "speaker": "Grandfather",
              "zh": "就是，农村想进镇，进那个城镇、城市。你爸爸、姑姑、大伯已经读到差不多小学毕业了，再读，再读完初中，那时候就想，还要再进一步。因为什么？它教育比较好，环境比较好。",
              "en": "That is: from the village you want to get into a town, a town, a city. Your dad, your aunt and your uncle had nearly finished primary school; once they'd gone on and finished junior high, we thought we had to go one step further. Why? Because the education there was better and the environment was better.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "12:11",
              "speaker": "Grandfather",
              "zh": "是。在农村就想进镇、（进）城市，这个城市进了，就要再升级，升级一步，到（更大的）城市。",
              "en": "Yes. In the village you want to get into a town, a city; once you've made it into this city, you want to move up again, one more step, to a (bigger) city.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "12:34",
              "speaker": "Wang Rong Xuan",
              "zh": "［调整麦克风，约半分钟］",
              "en": "[Adjusting the microphone, about half a minute]",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "13:11",
              "speaker": "Grandfather",
              "zh": "所以那时候中国发展还不那么平衡，所以我们也很难得去想说下一代要往大城市。我们当时所看到的，就认为厦门（是）大城市了。",
              "en": "Back then China's development still wasn't very balanced, so it was rare for (people like) us to think the next generation should head for a big city. From what we could see at the time, Xiamen already counted as a big city.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "13:34",
              "speaker": "Grandfather",
              "zh": "也在九十年代，也有这种［……］去上海发展，但是也不够条件。这些孩子们没办法去，条件不够。［……］去上海发展。我知道，我去上海才能办得到事。我这种人的性格，只有（越）大的平台［……］",
              "en": "Also in the nineties there was this […] going to Shanghai to develop (the business), but the conditions were not sufficient. The children couldn't go; the conditions were not sufficient. […] to Shanghai. I knew that only in Shanghai could I really get things done. Someone with my character, only a (bigger) platform […]",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "14:16",
              "speaker": "Grandfather",
              "zh": "［听不清］……在那个小地方［……］。所以我很想去上海。［听不清］……我们当时只有两个人，背后也没有人帮。",
              "en": "[inaudible] … in that small place […]. So I really wanted to go to Shanghai. [inaudible] … At the time it was just the two of us, with nobody behind us to help.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "14:59",
              "speaker": "Grandfather",
              "zh": "［听不清］……所以有点可怜。孩子们能送去学校是最好的，哪怕我们辛苦一点。所以你姑姑、你爸爸，送到厦门（的学校），学校都送得进去了。",
              "en": "[inaudible] … so it was a bit pitiful. Getting the children into school was the best thing, even if it meant a harder time for us. So your aunt and your dad were sent to (school in) Xiamen. We managed to get them into the schools.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "15:47",
              "speaker": "Grandfather",
              "zh": "［听不清］……买的［住所名称待确认］……",
              "en": "[inaudible] … bought … [residence name awaiting confirmation] …",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "16:00",
              "speaker": "Wang Rong Xuan",
              "zh": "我们先暂停一会儿。",
              "en": "Let's pause for a moment.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            }
          ]
        },
        {
          "id": "s2",
          "label": "Part 2",
          "duration": "07:35",
          "segments": [
            {
              "t": "00:03",
              "speaker": "Wang Rong Xuan",
              "zh": "在这个搬去厦门的过程中，遇到最艰难的困难是什么？",
              "en": "While you were moving to Xiamen, what was the hardest difficulty you faced?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:30",
              "speaker": "Grandfather",
              "zh": "那时候没办法一家（人）在一起。奶奶平常都［……］。你爸爸还在学校，你说他有没有吃饭，吃了没（我们）也不知道。",
              "en": "At that time there was no way for the family to be together. Grandma usually […]. Your dad was still at school. Had he eaten or not? (We) didn't even know.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:02",
              "speaker": "Grandfather",
              "zh": "虽然是买房子在厦门，孩子们进厦门来读书，我们大人还是在安海、在晋江，还是在工厂，就会舍不得你爸爸自己一个人在厦门读高中，生活上还要自己（照顾自己）。",
              "en": "Even though we had bought a flat in Xiamen and the children came to Xiamen for school, we adults were still in Anhai, in Jinjiang, still at the factory. So it was hard to leave your dad on his own in Xiamen for high school, having to look after himself.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:36",
              "speaker": "Wang Rong Xuan",
              "zh": "那当时那段时间是怎么撑过去的呢？是靠什么信念撑过去的？",
              "en": "How did you get through that period? What belief carried you through?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:50",
              "speaker": "Grandfather",
              "zh": "［……］（自古）忠孝不能两全。只希望孩子们好好读书，（我们）专心工作，总有一天，可以在厦门［……］团圆的。",
              "en": "[…] (Since ancient times,) you can't fulfil both your duty and your devotion to family [忠孝不能两全, zhōng xiào bù néng liǎng quán]. We only hoped the children would study well while (we) focused on work, and that one day we could be together again in Xiamen.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "02:50",
              "speaker": "Grandfather",
              "zh": "后来就真的［……］，我们就一起住在［家中住所，名称待家人确认］，有很多年。爷爷奶奶是每天早上从厦门（出发），去晋江上班，晚上再回来。好多年了，很多年了。",
              "en": "And later it really happened […]. We lived together at [the family’s flat; name awaiting confirmation] for many years. Every morning Grandpa and Grandma set off from Xiamen to work in Jinjiang, and came back at night. For years, many years.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "03:12",
              "speaker": "Grandfather / another speaker (unconfirmed)",
              "zh": "所以那时候很辛苦，你想想看，每天（开）车。所以我们那个老奔，你想想，老奔现在六十万公里，是不是？还是四十万？——四十万公里还是六十万？——四十几万。",
              "en": "So it was hard back then. Think about it: driving every single day. That old Benz of ours, think about it, the old Benz has done 600,000 km by now, right? Or 400,000? 400,000 km or 600,000? Over 400,000.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker",
              "review_note": "Both 600,000 and 400,000 are mentioned. The last machine reading is 400,000-something; this is an odometer discussion, not a measured commute total."
            },
            {
              "t": "03:37",
              "speaker": "Grandfather",
              "zh": "所以那时候几点出发，都要控制：早五分钟就不堵车了，晚五分钟就要慢多久，都很清楚。所以一直在克服这个。这部老奔还给它留下来，对，要见证。这部车是保护爷爷奶奶当时出门平安的。",
              "en": "So back then, when we left had to be controlled: five minutes early and you missed the traffic; five minutes late and you knew exactly how much later you'd be. We were always battling that. That's why we've kept the old Benz. Yes, as a witness. That car is what kept Grandpa and Grandma safe whenever we went out back then.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:05",
              "speaker": "Grandfather",
              "zh": "我以前就是用信念，［……］上车，在车头这样［……］。那时候那种条件，平安顺，爷爷奶奶想的，每一天平安顺就OK了。",
              "en": "Back then I relied on faith, […] getting in the car, at the front of the car like this […]. In those conditions, safe and smooth: all Grandpa and Grandma wanted was for every day to go safe and smooth, and that was OK.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:38",
              "speaker": "Wang Rong Xuan",
              "zh": "那你们觉得，就是在当时那个年代，普通家庭想要扎下根的话，需要克服些什么？",
              "en": "So in your view, in that era, what did an ordinary family have to overcome to put down roots?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "05:01",
              "speaker": "Wang Rong Xuan",
              "zh": "（重复问题）就是在当时那个年代，普通家庭想要扎下根的话，需要克服什么？",
              "en": "(Repeats the question) In that era, what did an ordinary family need to overcome to put down roots?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "05:10",
              "speaker": "Grandfather",
              "zh": "太难了。而且要克服什么呢？太难。要［……］，吃苦耐劳。这样子忙碌的，为了生活忙碌，要工作，忙碌地生活。",
              "en": "It was very hard. And what did you have to overcome? Very hard. You had to […] put up with hardship and work hard. Busy like that, busy just to make a living, working, living a busy life.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "05:44",
              "speaker": "Grandfather",
              "zh": "［听不清］",
              "en": "[inaudible]",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "06:06",
              "speaker": "Wang Rong Xuan",
              "zh": "那改革开放后，就像现在这些年轻人，离开故土去别的地方打拼，你觉得这意味着什么？",
              "en": "After Reform and Opening, young people like those today leave their hometowns to strive somewhere else. What do you think that means?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "06:16",
              "speaker": "Grandfather",
              "zh": "意味着，是去闯社会，要看人生，做一份事业，是大部分人的理想，大部分人的愿望。只有这样子，要有钱，他的家庭才能过上幸福的日子。",
              "en": "It means going out to make your way in the world, to see life, to build a career. That's most people's ideal, most people's wish. Only this way, with money, can a family live a happy life.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "06:50",
              "speaker": "Wang Rong Xuan",
              "zh": "看着我们的父辈后来又去上海、香港、海外开拓视野，你们的心情是怎么样的？",
              "en": "When you watched our parents' generation go on to Shanghai, Hong Kong and overseas to widen their horizons, how did you feel?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:05",
              "speaker": "Grandfather",
              "zh": "我跟奶奶很高兴，很赞同，很认同，说人就是要这样子的。像你妈妈也是，也很想要发展事业。",
              "en": "Grandma and I were very happy. We fully approved, we really agreed: this is how people should be. Your mum too, she also really wanted to build a career.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            }
          ]
        },
        {
          "id": "s3",
          "label": "Part 3",
          "duration": "12:08",
          "segments": [
            {
              "t": "00:00",
              "speaker": "Grandfather",
              "zh": "你能够做的事业，能够做得平直顺，是人生的一大快乐与幸福。要不然像爷爷到这把岁数，日子过得很自在，很充实，心里想到的都是很快乐，很幸福。",
              "en": "If the career you're able to build goes steady and smooth [平直顺, píng zhí shùn], that's one of life's great joys and blessings. Otherwise, like Grandpa at this age: my days are relaxed and full, and whatever comes to mind makes me happy, makes me feel blessed.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "平直顺 is in the written summary and Qwen draft; Breeze readings differ. Ask a dialect speaker to settle the wording."
            },
            {
              "t": "00:37",
              "speaker": "Grandfather",
              "zh": "有一句古话：“人生能有几回搏”，就是这样。",
              "en": "There's an old saying: \"How many times in a life do you get to go all out?\" [人生能有几回搏, rén shēng néng yǒu jǐ huí bó] That's how it is.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:47",
              "speaker": "Wang Rong Xuan",
              "zh": "那你们觉得，家是固定的那一块故土，还是说是一家人在一起？",
              "en": "So do you think home is a fixed piece of native soil, or is it the family being together?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "00:57",
              "speaker": "Grandfather",
              "zh": "［……］的话，还是一家人在一起。因为一家人在一起是知根知底，知根知底。一家人在一起其乐融融，",
              "en": "[…] it's still the family being together. Because a family together know each other inside out, inside out. A family together is happy and warm,",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "01:26",
              "speaker": "Grandfather",
              "zh": "互相包容，互相能认识，互相能体验、体会，自然就能平顺，快乐。平顺，自然平顺，很愉快，愉快的心情。",
              "en": "you make allowances for each other, understand each other, feel for each other, and naturally things go smoothly and happily. Smoothly, naturally smoothly, very pleasant, a happy frame of mind.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "02:05",
              "speaker": "Wang Rong Xuan",
              "zh": "你们觉得我们一代一代人向外奔走，在这个家族的迁徙中得到了什么，或失去了什么？",
              "en": "As our family has moved outward generation after generation, what do you think we have gained in this migration, or lost?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "02:15",
              "speaker": "Grandfather",
              "zh": "爷爷的理解，都是得到。所以爷爷的理解是：一个自然人，在这个［……］自然的环境条件下，能这样子去［……］，去奋斗，就感觉到人很愉快了。",
              "en": "The way Grandpa sees it, it's all been gain. As Grandpa understands it: an ordinary human being, under these […] natural conditions, able to go out like this […] and strive, that alone makes a person feel very happy.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "03:14",
              "speaker": "Grandfather",
              "zh": "掌握平直顺，不用极端地去做什么。包括赚钱，绝对不能极端。因为我们是一个人，我们赚钱是要来有一个幸福的家庭，幸福过日子，幸福地生存，（这样）你才够分。",
              "en": "Keep it steady and smooth; there's no need to go to extremes in anything. That includes making money: absolutely no extremes. Because we are human beings, and we earn money in order to have a happy family, to live happily, to get by happily. (That's how) you have enough.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "平直顺 is in the written summary and Qwen draft; Breeze readings differ. Ask a dialect speaker to settle the wording."
            },
            {
              "t": "03:48",
              "speaker": "Grandfather",
              "zh": "过量的、过分的［……］。［……］过量的同时，人才晓得懂。［……］大家就懂，但是他不懂，才过分。［……］做什么是不对的，（要做）清醒的人。",
              "en": "Too much, overdoing it […]. […] only when it's too much do people come to understand. […] everyone understands, but he doesn't, and that's why he overdoes it. […] what's wrong to do. (Be) a clear-headed person.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:28",
              "speaker": "Grandfather",
              "zh": "然后，快乐是人生。人来到世上，就是这样的，平顺是最好的。",
              "en": "And so, happiness is life. When a person comes into the world, that's how it is: steady and smooth is best.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:40",
              "speaker": "Wang Rong Xuan",
              "zh": "那你们对后代的教育有期待什么吗？就是觉得年轻人应该多去外面，去见更广阔的世界，或者是……",
              "en": "And what do you hope for in how the next generations are brought up? Do you think young people should go out more and see a wider world, or…",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "04:55",
              "speaker": "Grandfather",
              "zh": "人性正确。对，正确。［……］快乐。",
              "en": "Being of right character. Yes, right. […] happy.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "The models disagree here: the earlier edit reads 人性正确, while Qwen mostly hears health and happiness. Do not quote this phrase as confirmed."
            },
            {
              "t": "05:16",
              "speaker": "Grandfather",
              "zh": "一要健康，［身体］健康。不认同就一定要闯出去——闯出去，不认同这样，不赞同。（但是）也要赞同、支持他们。身体健康。",
              "en": "First, health, (good) health. I don't agree that you absolutely must strike out, strike out. I don't agree with that, don't endorse it. (But) we should still approve and back them. Good health.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "05:49",
              "speaker": "Grandfather",
              "zh": "好的，懂得要去奋斗的，去奋斗；接下来就顾好自己的家。家才是最硬的，一个安心之处，可以让你开心、让你愉快、让你高兴的一个家。大家在一起其乐融融，这样子而已。互相爱护，互相信任，",
              "en": "Right: those who know they should strive, go and strive; and after that, take good care of your own family. Home is the most solid thing there is, a place where your heart can rest, a home that makes you glad, cheerful, happy. Everyone together, happy and warm, that's all. Caring for each other, trusting each other,",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "06:42",
              "speaker": "Grandfather",
              "zh": "照顾。［……］闯出去，外面的社会、外面的市场，都是［听不清］……",
              "en": "looking after each other. […] going out, the society out there, the market out there, it's all [inaudible] …",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "06:55",
              "speaker": "Wang Rong Xuan",
              "zh": "你们对孩子有没有什么叮嘱？",
              "en": "Is there anything you'd tell the children to keep in mind?",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:00",
              "speaker": "Grandfather",
              "zh": "就（像）奶奶说的，身体健康。［……］我也跟奶奶说，我们是平民百姓，有一句话：",
              "en": "Like Grandma said: good health. […] I also tell Grandma: we're just ordinary folk, and there's a saying:",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "07:30",
              "speaker": "Grandfather",
              "zh": "要懂得知足。所以（我）跟奶奶就常讲，我不喜欢古代人这一句，叫“满足”。谁会满足啊？没有一个人会满足。但是要学会知足。学会知足——学会知足是用大脑跟心灵去想出来的。如果你学会了，",
              "en": "you have to know what is enough. So I often tell Grandma: I don't like that word the ancients used, \"satisfied\" [满足, mǎnzú]. Who's ever satisfied? Nobody is ever satisfied. But you have to learn to be content [知足, zhīzú]. Learning contentment: you work it out with your mind and your heart. If you learn it,",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "08:30",
              "speaker": "Grandfather",
              "zh": "［……］一代会比一代强。时代也是这样子，一代会比一代强，中国肯定是这样子。",
              "en": "[…] each generation will be stronger than the one before. The times are like that too: each generation stronger than the last. China is certainly like that.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "08:45",
              "speaker": "Grandfather",
              "zh": "所以（我）也很信仰毛泽东、周恩来、朱德（?），看他们这些不求回报的人，以前他们要出来革命，［听不清］……",
              "en": "That's why I have great faith in Mao Zedong, Zhou Enlai, Zhu De (?). Look at people like them who asked for nothing in return. Back then they came out to make the revolution, [inaudible] …",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "Uncertain passage; ask the narrator to review wording and permission before any public use."
            },
            {
              "t": "09:06",
              "speaker": "Grandfather",
              "zh": "［……］他们领导推动，［……］就成立了。",
              "en": "[…] they led and pushed it forward, […] and so it was founded.",
              "confidence": "low",
              "review_status": "needs_dialect_speaker",
              "review_note": "Uncertain passage; ask the narrator to review wording and permission before any public use."
            },
            {
              "t": "09:12",
              "speaker": "Wang Rong Xuan",
              "zh": "那我们先问完最后一个问题：就是你们这一生的经历，如果说总结成一句话留给后辈，这句话会是什么？",
              "en": "Let's finish with the last question: if you had to sum up your life's experience in one sentence to leave to those who come after you, what would it be?",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "09:30",
              "speaker": "Grandfather",
              "zh": "这一句……这一句其实要……要很清楚，［……］。因为你刚才讲的，下一代［……］。",
              "en": "This one sentence… this one sentence really has to be… has to be very clear, […]. Because of what you just said, the next generation […].",
              "confidence": "low",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "09:46",
              "speaker": "Grandfather",
              "zh": "第一，每个人身体健康；第二，每个人聪明；第三就是快乐；第四，幸福。幸福什么意思？就是今天出太阳，我感觉很开心；下雨，我也感觉很高兴，就叫做幸福。",
              "en": "First, everyone in good health. Second, everyone smart. Third, joy. Fourth, happiness. What does happiness mean? It means: today the sun is out and I feel glad; it rains and I still feel happy. That's what happiness is.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "10:25",
              "speaker": "Grandfather",
              "zh": "懂得什么？只有做人做好了，［……］。［……］很累，我也累了。你能这样子认清，就可以说自己提高了，明白人生来时路。",
              "en": "Understand what? Only that you've done well at being a person, […]. […] tired, I'm tired too. If you can see this clearly, you can say you've grown: you understand the road you have walked in life.",
              "confidence": "medium",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "10:55",
              "speaker": "Wang Rong Xuan",
              "zh": "那我们这个采访结束了。",
              "en": "That's the end of our interview.",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            },
            {
              "t": "11:06",
              "speaker": "Wang Rong Xuan",
              "zh": "［互相道谢，随后请喝茶、闲谈、调整设备，至录音结束］",
              "en": "[Thank-yous all round, then an offer of tea, small talk and fiddling with the equipment until the recording ends]",
              "confidence": "high",
              "review_status": "needs_dialect_speaker"
            }
          ]
        }
      ]
    },
    "sessionOffsets": [
      0,
      965.44,
      1420.928
    ]
  }
];
const contributors=[
  {
    "name": "Wang Rong Xuan",
    "role": "Interviewer",
    "bio": "Interviewed their grandfather about the family’s workshop, schooling and moves within Fujian."
  },
  {
    "name": "Yufeng Lin",
    "role": "Project lead and website editor",
    "bio": "Develops the collection website and brings the recordings and reading material together."
  }
];
