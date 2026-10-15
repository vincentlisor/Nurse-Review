(function () {
  function q(topic, stem, choices, a, why, fig) {
    return { topic: topic, stem: stem, choices: choices, a: a, why: why, fig: fig || "" };
  }

  var topics = [
    { id: "worms", name: "Tapeworm and pinworm", color: "#8a5a2b", blurb: "Taenia saginata, Taenia solium, Enterobius, the tape test, and family treatment." },
    { id: "basics", name: "Burden and WHO goals", color: "#0e6b63", blurb: "Why these diseases matter, the six big killers, and the three WHO goals." },
    { id: "chain", name: "Chain of infection", color: "#1d4e89", blurb: "Agent, reservoir, exit, transmission, entry, and the susceptible host." },
    { id: "terms", name: "Signs and case counts", color: "#5c4d7a", blurb: "Symptom, sign, syndrome, incidence, and prevalence." },
    { id: "class", name: "How diseases are classed", color: "#7a4b2e", blurb: "Infectious, contagious, sporadic, endemic, epidemic, and pandemic." },
    { id: "spread", name: "Contact and high-risk hosts", color: "#0f5c6b", blurb: "Direct contact, fomites, and patients who need extra protection." },
    { id: "vector", name: "DOH CLEAN", color: "#3d7a3a", blurb: "Chemically treated nets, larvae-eating fish, sanitation, and neem." },
    { id: "dengue", name: "Dengue", color: "#b42318", blurb: "Day-biting Aedes, stages, grades, fluids, blood products, and nursing care." },
    { id: "filaria", name: "Filariasis", color: "#1f6f8a", blurb: "Night blood films, elephantiasis, DEC, and ivermectin." },
    { id: "lepto", name: "Leptospirosis", color: "#a15c07", blurb: "Weil disease, cultures by day, urine isolation, and renal failure." },
    { id: "malaria", name: "Malaria", color: "#3f6212", blurb: "Anopheles, species patterns, drugs, quinine, and travel prophylaxis." }
  ];

  var questions = [
    q("worms", "A patient became ill after eating undercooked beef. Which tapeworm fits this source?", [
      "Taenia saginata",
      "Taenia solium",
      "Enterobius vermicularis",
      "Wuchereria bancrofti"
    ], 0, "Taenia saginata is the cattle tapeworm. Taenia solium is the pork tapeworm. Both are acquired by the fecal-oral route when food is contaminated by the agent.", "foods"),

    q("worms", "Seizures and hydrocephalus from neurocysticercosis are linked in this lecture with which tapeworm?", [
      "Taenia solium, the pork tapeworm",
      "Taenia saginata, the beef tapeworm",
      "Enterobius vermicularis",
      "Brugia malayi"
    ], 0, "The lecture lists neurocysticercosis, with seizures and hydrocephalus, among the tapeworm effects. That invasive picture belongs to Taenia solium from pigs, not the beef tapeworm.", "foods"),

    q("worms", "How are both the beef tapeworm and the pork tapeworm transmitted?", [
      "Fecal-oral route, by food contaminated with the agent",
      "Bite of a female Anopheles mosquito",
      "Urine of infected animals on intact skin",
      "Direct skin contact with a draining wound"
    ], 0, "The lecture gives one route for both tapeworms: fecal-oral ingestion of food contaminated by the agent. Diagnosis of tapeworm disease is by stool exam."),

    q("worms", "Which test does the lecture use to diagnose tapeworm infection?", [
      "Stool examination",
      "Nighttime cellulose tape test",
      "Tourniquet test",
      "Malarial smear"
    ], 0, "Tapeworm infection is diagnosed by stool exam. The nighttime tape test is for pinworm, when the worm releases eggs."),

    q("worms", "Which drug pair does the lecture use for tapeworm?", [
      "Praziquantel and niclosamide",
      "Pyrantel pamoate and mebendazole",
      "Diethylcarbamazine and ivermectin",
      "Penicillin and tetracycline"
    ], 0, "Praziquantel and niclosamide are the tapeworm drugs. Pyrantel pamoate and mebendazole are the pinworm drugs. Do not swap the pairs."),

    q("worms", "A child has intense itching around the anus. Which organism causes pinworm?", [
      "Enterobius vermicularis",
      "Taenia saginata",
      "Leptospira",
      "Plasmodium vivax"
    ], 0, "Pinworm is caused by Enterobius vermicularis. Itching at the anal area is from the eggs the worm deposits there."),

    q("worms", "Why does the pinworm patient itch around the anus?", [
      "The worm releases eggs at that site",
      "Adult worms block the lymphatic vessels",
      "Petechiae form after a tourniquet test",
      "Microfilaria circulate only at night"
    ], 0, "The lecture ties the itch to eggs of Enterobius at the anal area. The worm lays those eggs at night, which is why the tape test is done then."),

    q("worms", "When should the cellulose tape test for pinworm be done, and why?", [
      "At night, because the worm releases eggs at night",
      "At noon, because eggs hatch only in sunlight",
      "During the febrile stage of dengue",
      "After a 12-day course of diethylcarbamazine"
    ], 0, "The tape test is done at nighttime. The lecture states that the agents release their eggs during the night.", "tape"),

    q("worms", "Which medicines does the lecture give for pinworm?", [
      "Pyrantel pamoate and mebendazole",
      "Praziquantel and niclosamide",
      "Chloroquine and primaquine",
      "Quinine and doxycycline"
    ], 0, "Pyrantel pamoate and mebendazole treat pinworm. Praziquantel and niclosamide treat tapeworm."),

    q("worms", "How does the lecture repeat antihelmintic treatment for pinworm?", [
      "Repeat after 2 weeks, and treat the entire family",
      "Give one dose only to the patient, on an empty stomach",
      "Repeat daily for 12 days after meals",
      "Continue for 4 weeks after the family leaves the area"
    ], 0, "Antihelmintics are repeated after 2 weeks for the entire family. Nursing care also promotes hygiene, environmental sanitation, and proper waste and sewage disposal."),

    q("basics", "In this lecture, communicable diseases are the primary cause of what gap?", [
      "The mortality gap between rich and poor countries",
      "The gap between incidence and prevalence",
      "The gap between signs and symptoms",
      "The gap between endemic and sporadic disease"
    ], 0, "The opening point is that communicable diseases are the primary cause of the mortality gap between rich and poor countries."),

    q("basics", "About 60% of deaths from communicable diseases are attributed to a short list. Which disease is on that list?", [
      "Measles",
      "Diabetes mellitus",
      "Hypertension",
      "Filariasis"
    ], 0, "The six are HIV/AIDS, malaria, tuberculosis, measles, diarrheal disease, and acute respiratory infection. About 60% of communicable-disease deaths are attributed to these."),

    q("basics", "Which condition is NOT part of that 60% list?", [
      "Stroke",
      "HIV/AIDS",
      "Tuberculosis",
      "Acute respiratory infection"
    ], 0, "Keep the six together: HIV/AIDS, malaria, tuberculosis, measles, diarrheal disease, and acute respiratory infection. Stroke is not on the list."),

    q("basics", "Which of these is one of the three WHO goals in the lecture?", [
      "Prevention through immunization",
      "Eradication of every fomite in hospitals",
      "Mass treatment with aspirin during outbreaks",
      "Isolation of every susceptible host"
    ], 0, "The three WHO goals are prevention of disease, prevention of disability and death from infection, and prevention through immunization."),

    q("chain", "What is the lecture order of the chain of infection?", [
      "Agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host",
      "Reservoir, agent, susceptible host, portal of entry, portal of exit, transmission",
      "Portal of entry, agent, transmission, reservoir, portal of exit, host",
      "Susceptible host, portal of exit, agent, reservoir, transmission, portal of entry"
    ], 0, "Memorize one direction: agent, reservoir, portal of exit, mode of transmission, portal of entry, susceptible host. Breaking any link stops the chain."),

    q("chain", "Which description matches a reservoir?", [
      "The person, animal, arthropod, plant, soil, or substance where the agent normally lives and multiplies",
      "Any subjective change the patient feels",
      "A nonliving object that carries the agent between people",
      "A worldwide excess of cases in a short time"
    ], 0, "A reservoir is where the causative agent normally lives, multiplies, survives, and reproduces enough to reach a susceptible host. It may be a person, animal, arthropod, plant, soil, or substance."),

    q("chain", "Sterilizing surgical instruments that enter sterile body spaces is aimed at which link?", [
      "The causative agent",
      "The portal of entry only",
      "The susceptible host only",
      "Pandemic spread"
    ], 0, "To eliminate the organism, the lecture lists sterilizing surgical instruments, safe food handling, safe drinking water, vaccinating people so they do not become reservoirs, and treating people who are ill."),

    q("chain", "A nurse covers a cough with a tissue. Which link is interrupted?", [
      "Portal of exit",
      "Susceptible host",
      "Causative agent",
      "Reservoir in the soil"
    ], 0, "The portal of exit is how the agent leaves the reservoir. Cover coughs and sneezes, glove body fluids and then do hand hygiene, keep draining wounds dressed, and do not work with exudative lesions or weeping dermatitis."),

    q("chain", "A nurse has weeping dermatitis on the hands. What does the lecture expect?", [
      "Do not work, so the portal of exit is controlled",
      "Work as usual if gloves are worn only for meals",
      "Give aspirin and continue the shift",
      "Collect a nighttime blood smear before the shift"
    ], 0, "Not working with exudative or weeping lesions reduces risk from the portal of exit. The same link includes covering draining wounds and handling body fluids with gloves, then hand hygiene."),

    q("chain", "Cleaning high-touch surfaces and discarding gloves after each patient interrupts which link?", [
      "Mode of transmission",
      "Portal of entry of the nurse only",
      "The definition of prevalence",
      "Exoerythrocytic relapse"
    ], 0, "Transmission is stopped by hand hygiene, gloves that are discarded after each patient, cleaning or sterilizing shared equipment, and cleaning the environment, especially high-touch surfaces.", "chain"),

    q("chain", "Masks, goggles, face shields, IV dressings, and needlestick prevention protect which link?", [
      "Portal of entry",
      "Portal of exit of the reservoir host",
      "The causative agent in food only",
      "The gametocyte in the mosquito"
    ], 0, "Portals of entry include the mouth, nose, eyes, rashes, cuts, needlesticks, surgical wounds, and IV sites. Protect them with dressings, IV care, early tube removal, masks and shields, keeping dirty hands away from the mouth, needlestick prevention, and food and water safety."),

    q("chain", "Vaccination, good nutrition, intact skin, and rest are used to protect which link?", [
      "The susceptible host",
      "The portal of exit",
      "A fomite",
      "The mosquito larva"
    ], 0, "A susceptible host lacks effective resistance. Reduce that risk by vaccination, preventing new exposure in people who are already ill, immunocompromised, or living with HIV, plus nutrition, skin care, covering skin breaks, and rest.", "risks"),

    q("chain", "Monitoring contaminated water in sensitive hospital areas, then washing the hands, is listed under control of which link?", [
      "Reservoir",
      "Mode of transmission by droplets only",
      "Syndrome",
      "Grade IV dengue"
    ], 0, "Reservoir control includes treating the ill, vaccination, responsible handling of body fluids, safe food handling, and monitoring soil and contaminated water in sensitive hospital areas with careful handwashing afterward."),

    q("terms", "A patient says, “I feel very weak,” but the nurse cannot measure that feeling. This is a", [
      "Symptom",
      "Sign",
      "Syndrome",
      "Prevalence"
    ], 0, "A symptom is subjective. It is evidence of disease the patient experiences, a change in body function that an observer cannot see directly."),

    q("terms", "A fever of 39.5 C that the nurse measures is best called a", [
      "Sign",
      "Symptom",
      "Sporadic event",
      "Fomite"
    ], 0, "A sign is objective evidence of disease that can be observed and measured. Symptoms are what the patient feels."),

    q("terms", "A specific group of signs and symptoms that accompany one disease is a", [
      "Syndrome",
      "Reservoir",
      "Incidence rate only",
      "Portal of exit"
    ], 0, "A syndrome is a specific group of signs and symptoms that travel with a particular disease. Weil syndrome is the icteric form of leptospirosis in this lecture."),

    q("terms", "Incidence means the number of people who", [
      "Develop a disease during a particular time period",
      "Have ever had the disease, counting old and new cases together",
      "Are immune after vaccination",
      "Carry the agent without a portal of exit"
    ], 0, "Incidence counts new cases in a defined period. Prevalence counts existing cases, both old and new, no matter when they started."),

    q("terms", "Prevalence includes which cases?", [
      "Both old and new cases, regardless of when the disease appeared",
      "Only cases that start today",
      "Only laboratory-confirmed epidemics",
      "Only diseases that spread by fomites"
    ], 0, "Prevalence is the number of people in a population who have the disease, old cases and new cases together. Incidence is limited to new cases in a time window."),

    q("class", "Which statement matches an infectious disease?", [
      "It is caused by invasion and multiplication of microorganisms",
      "It occurs only as a worldwide outbreak",
      "It is present at a constant low level and never spreads",
      "It is only a subjective symptom"
    ], 0, "Infectious disease means a microorganism invades and multiplies. Contagious disease means it spreads easily from person to person. Malaria, later in the lecture, is infectious but not contagious."),

    q("class", "A contagious disease is one that", [
      "Spreads easily from one person to another",
      "Occurs only once in a lifetime in a single person",
      "Is limited to arthropod reservoirs",
      "Has no portal of exit"
    ], 0, "Contagious means the disease spreads easily person to person. Infectious means microorganisms invade and multiply. A disease can be infectious without being contagious."),

    q("class", "Botulism and tetanus are the lecture examples of which pattern?", [
      "Sporadic disease",
      "Endemic disease",
      "Pandemic disease",
      "Grade IV dengue"
    ], 0, "Sporadic disease occurs only occasionally. The examples are botulism and tetanus."),

    q("class", "Pulmonary tuberculosis that is constantly present in a community is", [
      "Endemic",
      "Sporadic",
      "A fomite",
      "A symptom"
    ], 0, "Endemic disease is constantly present in a population, country, or community. Pulmonary tuberculosis is the lecture example."),

    q("class", "An epidemic is best described as", [
      "More cases than usual in an area, acquired over a relatively short time",
      "A disease that occurs only occasionally, such as tetanus",
      "A disease constantly present in one community",
      "An infection that cannot spread at all"
    ], 0, "An epidemic is a greater-than-normal number of cases in an area within a short period. A pandemic is an epidemic that occurs worldwide."),

    q("class", "The lecture example of a pandemic is", [
      "HIV infection",
      "Pulmonary tuberculosis in one town",
      "Botulism",
      "Pinworm in one household"
    ], 0, "A pandemic is an epidemic that occurs worldwide. The lecture example is HIV infection."),

    q("spread", "What does the lecture call the most important and frequent mode of transmission?", [
      "Contact transmission",
      "Airborne spread of every infection",
      "Transplacental spread only",
      "Blood transfusion only"
    ], 0, "Contact transmission is the most important and frequent mode. It includes direct contact and indirect contact through fomites."),

    q("spread", "Kissing, touching, and sexual contact, with no intermediate object, are", [
      "Direct contact transmission",
      "Indirect contact by a fomite",
      "Vector-borne transmission",
      "Vehicle transmission by water only"
    ], 0, "Direct contact goes from the source straight to the susceptible host. No intermediate object is involved. Examples are kissing, touching, and sexual contact."),

    q("spread", "A shared thermometer that is not cleaned between patients is acting as a", [
      "Fomite in indirect contact transmission",
      "Direct contact without an object",
      "Portal of entry of the nurse",
      "Susceptible host"
    ], 0, "Indirect contact carries the agent from the reservoir to the host on a nonliving object, a fomite. The path is source, then object, then susceptible host."),

    q("spread", "Which patient is NOT in the lecture high-risk group for being a susceptible host?", [
      "A healthy school-age child here only for a scraped knee",
      "An older adult",
      "A patient with diabetes",
      "A patient with extensive burns"
    ], 0, "High-risk susceptible hosts in the lecture are immunocompromised patients, people with diabetes, surgical patients, patients with burns, and older adults. A well child with a minor scrape is not on that list."),

    q("vector", "Which set is the DOH CLEAN mnemonic for mosquito-borne disease?", [
      "Chemically treated net, larvae-eating fish, environmental sanitation, anti-mosquito measures, neem tree",
      "Chloroquine, lab smear, early fluids, antibiotics, nutrition",
      "Cough cover, linen change, eye shield, airway, needlestick box",
      "Culture blood, liver enzymes, electrolytes, albumin, neutrophils"
    ], 0, "CLEAN eradicates the mosquito source. C is a chemically treated mosquito net, L is larvae-eating fish, E is environmental sanitation, A is anti-mosquito action, and N is the neem tree, with oregano and eucalyptus also named.", "clean"),

    q("vector", "In CLEAN, the letter L means", [
      "Larvae-eating fish",
      "Leptospira isolation",
      "Long-acting primaquine",
      "Low-dose aspirin"
    ], 0, "L is larvae-eating fish. The rest of CLEAN is the chemically treated net, environmental sanitation, anti-mosquito measures, and neem, including oregano and eucalyptus."),

    q("dengue", "Dengue hemorrhagic fever in this lecture is caused by", [
      "Dengue virus of the family Flaviviridae, with 4 serotypes",
      "Plasmodium falciparum only",
      "Leptospira interrogans only",
      "Wuchereria bancrofti"
    ], 0, "Dengue virus is a Flaviviridae virus with 4 serotypes. It is not a parasite, a spirochete, or a filarial worm."),

    q("dengue", "Which statement about the main dengue vector is correct?", [
      "Female Aedes aegypti bites by day and breeds in water stored in houses",
      "Female Anopheles bites at noon and breeds only in fast rivers",
      "The vector is a male Culex that bites at midnight",
      "The vector is a tick that lives on cattle"
    ], 0, "The main vector is the day-biting female Aedes aegypti, which breeds in water stored in houses. The lecture also names Aedes albopictus and Culex fatigans.", "daynight"),

    q("dengue", "The incubation period of dengue in this lecture is", [
      "2 to 7 days",
      "10 to 15 minutes",
      "10 to 15 years",
      "4 weeks after leaving an area"
    ], 0, "Dengue incubation is 2 to 7 days. Do not confuse this with the 10-to-15-minute cold stage of malaria or the 10-to-15-year chronic stage of filariasis."),

    q("dengue", "Besides Aedes aegypti, which vectors does the lecture name for dengue?", [
      "Aedes albopictus and Culex fatigans",
      "Anopheles and Mansonia only",
      "Taenia and Enterobius",
      "The tsetse fly and a tick"
    ], 0, "The vectors listed are Aedes aegypti, Aedes albopictus, and Culex fatigans. They are day biters in this dengue section. Anopheles is the night-biting malaria vector."),

    q("dengue", "High fever, headache, malaise, red eyes, vomiting, gum bleeding, and a positive tourniquet test in the first 4 days fit which stage?", [
      "Febrile or invasive stage",
      "Toxic or hemorrhagic stage",
      "Convalescent stage",
      "Diaphoretic stage of malaria"
    ], 0, "The first 4 days are the febrile or invasive stage: high fever, headache, body malaise, conjunctival injection, vomiting, nose or gum bleeding, and a positive tourniquet test."),

    q("dengue", "On day 5 the fever has just lysed. The patient has abdominal pain, black stools, unstable blood pressure, a narrow pulse pressure, and shock. Which stage is this?", [
      "Toxic or hemorrhagic stage, days 4 to 7",
      "Febrile stage, days 1 to 4",
      "Convalescent stage, days 7 to 10",
      "Cold stage of malaria"
    ], 0, "After the fever lysis, days 4 to 7 are the toxic or hemorrhagic stage. Watch for abdominal pain, melena from upper gastrointestinal bleeding, unstable blood pressure, narrow pulse pressure, and shock.", "stages"),

    q("dengue", "It is day 8. The patient has been afebrile for 3 days, fluids were given, and the blood pressure is stable. Platelets are rising. Which stage is this?", [
      "Convalescent or recovery stage",
      "Toxic stage",
      "Grade IV irreversible shock",
      "Acute filarial fever"
    ], 0, "Days 7 to 10 are the convalescent stage. After about 3 afebrile days, with hydration and blood-pressure monitoring, the pressure stabilizes and platelets and bleeding tests begin to normalize."),

    q("dengue", "Grade I dengue in this lecture includes saddleback fever, constitutional symptoms, and which added finding?", [
      "A positive tourniquet test",
      "Spontaneous gastrointestinal bleeding",
      "Circulatory failure",
      "Irreversible shock with massive bleeding"
    ], 0, "Grade I is dengue fever with saddleback fever, constitutional symptoms, and a positive tourniquet test. Grade II adds spontaneous bleeding. Grade III is circulatory failure. Grade IV adds irreversible shock and massive bleeding."),

    q("dengue", "A child with dengue has a positive tourniquet test plus a nosebleed and skin bleeding. Which grade is this?", [
      "Grade II",
      "Grade I",
      "Grade III",
      "Grade IV"
    ], 0, "Grade II is Grade I plus spontaneous bleeding, including nosebleed, gastrointestinal bleeding, and cutaneous bleeding. Circulatory failure would move the illness to Grade III."),

    q("dengue", "Grade IV dengue is Grade III plus", [
      "Irreversible shock and massive bleeding",
      "Only a positive tourniquet test",
      "Only saddleback fever",
      "Only conjunctival injection"
    ], 0, "Grade III is dengue shock syndrome with circulatory failure. Grade IV is that picture plus irreversible shock and massive bleeding."),

    q("dengue", "How is the tourniquet, or Rumpel-Leede, test done and read in this lecture?", [
      "Inflate the cuff 6 to 10 minutes in a child or 10 to 15 minutes in an adult; more than 10 to 15 petechiae per square inch is positive",
      "Inflate the cuff for 30 seconds; one petechia is positive",
      "Count petechiae only on the feet after a 1-minute cuff time",
      "A positive test is fewer than 2 petechiae on the whole arm"
    ], 0, "This is a presumptive test of capillary fragility. Keep the cuff inflated 6 to 10 minutes for a child and 10 to 15 minutes for an adult. Count petechiae in 1 square inch. More than 10 to 15 petechiae per square inch is positive.", "dots"),

    q("dengue", "Which laboratory group matches the dengue section?", [
      "Dengue blot, dengue IgM, prothrombin time, APTT, bleeding time, and coagulation time",
      "Night blood smear for microfilaria only",
      "Stool exam for Taenia eggs only",
      "Quantitative buffy coat for Plasmodium only"
    ], 0, "Dengue labs in the lecture are dengue blot, dengue IgM, prothrombin time, activated partial thromboplastin time, bleeding time, and coagulation time. The tourniquet test is the bedside screen for capillary fragility."),

    q("dengue", "A patient with dengue has hemoconcentration and is not in shock. Which IV rate does the lecture use?", [
      "5 to 7 mL/kg/hr",
      "10 to 30 mL/kg in under 20 minutes",
      "20 mL/kg of fresh whole blood",
      "15 mL/kg of fresh frozen plasma over 2 hours"
    ], 0, "With hemoconcentration, give IV fluid at 5 to 7 mL/kg/hr. If shock is present, the lecture uses 10 to 30 mL/kg in less than 20 minutes.", "fluids"),

    q("dengue", "For dengue shock, the fluid bolus in this lecture is", [
      "10 to 30 mL/kg in less than 20 minutes",
      "5 to 7 mL/kg/hr",
      "1 unit of platelets per 5 to 7 kg given slowly over 1 day",
      "Primaquine for 14 days"
    ], 0, "Shock fluid is 10 to 30 mL/kg in under 20 minutes. The slower 5 to 7 mL/kg/hr rate is for hemoconcentration without that shock bolus."),

    q("dengue", "Fresh frozen plasma at 15 mL/kg over 2 to 4 hours is used in dengue when the patient has", [
      "Impending shock that does not respond to isotonic or colloid fluid, or a prolonged prothrombin time",
      "Only a positive tourniquet test and no bleeding",
      "Pinworm in the whole family",
      "A nocturnal microfilaria smear to collect"
    ], 0, "The slide writes “Flash Frozen Plasma,” meaning fresh frozen plasma. Give 15 mL/kg over 2 to 4 hours for impending shock unresponsive to isotonic or colloid fluid, and for a prolonged prothrombin time."),

    q("dengue", "Platelet concentrate for dengue is dosed at", [
      "1 unit per 5 to 7 kg",
      "1 unit per 20 kg",
      "15 mL/kg over 2 to 4 hours",
      "6 mg/kg for 12 days"
    ], 0, "Platelet concentrate is 1 unit per 5 to 7 kg. Cryoprecipitate is 1 unit per 5 kg. Fresh whole blood for active bleeding is 20 mL/kg, and packed red cells are 10 mL/kg."),

    q("dengue", "A patient with dengue has active bleeding and will receive fresh whole blood. Which order matches the lecture?", [
      "20 mL/kg, and check the serum calcium",
      "5 to 7 mL/kg/hr of plain IV fluid only, with no blood",
      "1 tablet of primaquine for 14 days",
      "Diethylcarbamazine after meals"
    ], 0, "Fresh whole blood is 20 mL/kg for active bleeding, and the serum calcium is checked. Packed red blood cells are listed at 10 mL/kg. Cryoprecipitate is 1 unit per 5 kg."),

    q("dengue", "Which fever order should the nurse question for a patient with dengue?", [
      "Aspirin for the fever",
      "Paracetamol for the fever",
      "Nasal packing with epinephrine for a nosebleed",
      "Help for the anxiety of the patient and family"
    ], 0, "Use paracetamol, not aspirin. Also avoid intramuscular injections. The lecture includes cytoprotectors, gastric lavage when gastrointestinal bleeding is a concern, Trendelenburg position for shock, epinephrine nasal packing, and support for anxiety."),

    q("dengue", "For dengue shock, which position does the lecture name?", [
      "Trendelenburg",
      "Prone with the head turned",
      "Standing, to raise the blood pressure",
      "High Fowler only, with the legs dependent"
    ], 0, "The lecture uses the Trendelenburg position for dengue shock. Pair that with fluids, no aspirin, no intramuscular injections, and epinephrine packing if the nose is bleeding."),

    q("dengue", "Which intervention does the lecture list when gastrointestinal bleeding is a concern in dengue?", [
      "Gastric lavage",
      "Peritoneal dialysis",
      "Intravenous quinine",
      "Ivermectin on an empty stomach"
    ], 0, "Gastric lavage and cytoprotectors are the lecture interventions aimed at gastrointestinal bleeding. Peritoneal dialysis belongs to leptospirosis with renal failure. Intravenous quinine belongs to cerebral malaria."),

    q("dengue", "Which prevention message matches the dengue program in this lecture?", [
      "Seek and destroy breeding places, say no to indiscriminate fogging, and seek early consultation",
      "Fog every street daily, even with no cases, and delay the clinic visit",
      "Store water uncovered beside the house",
      "Give aspirin at the first fever"
    ], 0, "The lecture prevention lines are: seek and destroy breeding places, say no to left-and-right or indiscriminate fogging, and seek early consultation. Search stored water, because Aedes aegypti breeds there."),

    q("filaria", "Which pair causes filariasis in this lecture?", [
      "Wuchereria bancrofti and Brugia malayi",
      "Taenia saginata and Taenia solium",
      "Plasmodium vivax and Plasmodium ovale",
      "Aedes aegypti and a virus only"
    ], 0, "The organisms are Wuchereria bancrofti and Brugia malayi. Slides sometimes spell the second name Bulgaria malayi. Female Aedes, Anopheles, and Mansonia mosquitoes transmit them."),

    q("filaria", "After the mosquito bite, where do the filarial larvae lodge and mature?", [
      "Lymph vessels and lymph glands",
      "Only the red blood cells",
      "Only the stool",
      "The renal tubules"
    ], 0, "Larvae travel in the bloodstream and lodge in lymphatic vessels and lymph glands, where they mature. That is why the later disease is lymphatic: lymphangitis, lymphadenitis, lymphedema, and elephantiasis."),

    q("filaria", "A blood film for microfilaria is drawn at 11 p.m. Which pattern is the nurse trying to catch?", [
      "Nocturnal, with microfilaria in peripheral blood from about 10 p.m. to 2 a.m.",
      "Diurnal, with the peak at noon",
      "The febrile stage of dengue",
      "The cold stage of malaria"
    ], 0, "Nocturnal filaria circulate in peripheral blood at night, about 10 p.m. to 2 a.m. Diurnal filaria are present in greater concentration during the day. Draw the smear when the species is in the blood.", "clock"),

    q("filaria", "Diurnal filariasis means the microfilaria", [
      "Circulate in greater concentration during the daytime",
      "Are found only in stool at night",
      "Appear only during dengue shock",
      "Are destroyed by a tourniquet test"
    ], 0, "Diurnal means daytime concentration in the blood. Nocturnal means the night window, about 10 p.m. to 2 a.m. The blood smear has to match the pattern."),

    q("filaria", "Which picture fits acute filariasis?", [
      "Filarial fever, lymphadenitis, and lymphangitis that may return up to 10 times a year and often settle in about 7 days",
      "Hydrocele and elephantiasis beginning on day 2",
      "Black stools and narrow pulse pressure",
      "Jaundice with oliguria in the first week"
    ], 0, "Acute attacks bring filarial fever and lymphatic inflammation, as often as 10 times a year, and usually ease after about 7 days. Lymphadenitis is node inflammation. Lymphangitis is vessel inflammation."),

    q("filaria", "Chronic filariasis appears about 10 to 15 years after the first attack. Which finding is elephantiasis?", [
      "Enlargement and thickening of the skin of a limb",
      "Temporary swelling of a limb that is still called lymphedema",
      "Swelling of the scrotum, which is a hydrocele",
      "A positive tourniquet test"
    ], 0, "Chronic disease brings three findings: hydrocele is scrotal swelling, lymphedema is temporary swelling of the limbs, and elephantiasis is enlargement and thickening of the skin of the limbs. The chronic stage is 10 to 15 years after the first attack.", "limbs"),

    q("filaria", "Which tests does the lecture use for filariasis?", [
      "Blood smear for microfilaria, immunochromatographic test, and eosinophil count",
      "Stool exam and tape test",
      "Dengue blot and tourniquet test",
      "Leptospira agglutination test only"
    ], 0, "Diagnosis uses a blood smear for microfilaria, an immunochromatographic test, and an eosinophil count. Time the smear for nocturnal or diurnal circulation."),

    q("filaria", "How is diethylcarbamazine given in this lecture?", [
      "6 mg/kg in divided doses for 12 consecutive days, immediately after meals",
      "A single dose on an empty stomach",
      "2 tablets weekly from 2 weeks before travel",
      "50,000 units/kg/day by vein"
    ], 0, "DEC is 6 mg/kg of body weight in divided doses for 12 straight days, taken right after meals. Prolonged use is linked in the notes with loss of vision, night blindness, or tunnel vision. An antihistamine covers allergic reactions to DEC. Also use paracetamol, vitamin B complex, limb elevation, and elastic stockings."),

    q("filaria", "Which instruction for ivermectin matches the lecture?", [
      "One dose with a full glass of water on an empty stomach, and do not use it in asthma",
      "Divide the dose for 12 days and give it after meals",
      "Give it with aspirin during dengue shock",
      "Continue it weekly throughout pregnancy"
    ], 0, "Ivermectin, or Mectizan, is a single dose with a full glass of water on an empty stomach. It cannot be used in a patient with asthma. DEC, not ivermectin, is the 12-day after-meals course."),

    q("filaria", "The lecture notes high filariasis rates in which places?", [
      "Bicol, Samar and Leyte, and Davao",
      "Only Sub-Saharan Africa",
      "Only the cold stage of malaria",
      "Only households with pinworm"
    ], 0, "High rates are noted in Region V, Bicol; Region VIII, Samar and Leyte; and Davao. The disease often becomes chronic, debilitating, and disfiguring because early symptoms are unnoticed or unfamiliar to health workers. Prevention is health teaching and environmental sanitation."),

    q("lepto", "How does Leptospira enter the body in this lecture?", [
      "Through intact or abraded skin, from water or wet soil contaminated with animal urine",
      "Only through a mosquito bite",
      "Only by eating undercooked beef",
      "Only by inhaling droplet nuclei"
    ], 0, "Leptospirosis, or Weil disease, is a zoonosis. Leptospira penetrates both intact and broken skin after contact with water or wet soil soiled by urine of infected animals."),

    q("lepto", "Fever, conjunctival injection, and meningeal irritation without jaundice fit which type?", [
      "Anicteric leptospirosis",
      "Icteric Weil syndrome",
      "Grade IV dengue",
      "Elephantiasis"
    ], 0, "Anicteric disease has no jaundice. It shows fever, conjunctival injection, and signs of meningeal irritation. Icteric disease is Weil syndrome, with liver and kidney injury."),

    q("lepto", "Jaundice, hepatomegaly, oliguria going on to renal failure, shock, coma, and heart failure fit which type?", [
      "Icteric leptospirosis, or Weil syndrome",
      "Anicteric leptospirosis",
      "Uncomplicated malaria",
      "Pinworm"
    ], 0, "Weil syndrome is the icteric type: hepatic and renal disease, jaundice, an enlarged liver, oliguria or anuria that can become renal failure, plus shock, coma, and congestive heart failure.", "weil"),

    q("lepto", "When is cerebrospinal fluid most useful for Leptospira culture?", [
      "From the 5th to the 12th day",
      "Only in the first 24 hours",
      "Only after full recovery, months later",
      "Only during a nighttime tape test"
    ], 0, "Culture timing matters. Blood is cultured during the first week. Cerebrospinal fluid is cultured from day 5 to day 12. Urine is cultured after the first week until the convalescent period."),

    q("lepto", "When does the lecture collect urine for Leptospira culture?", [
      "After the first week, until the convalescent period",
      "Only on the first day of fever",
      "Only from the 5th to the 12th hour",
      "Only if the tourniquet test is positive"
    ], 0, "Urine culture starts after the first week and continues until convalescence. Blood is the first-week specimen. Cerebrospinal fluid is for days 5 to 12."),

    q("lepto", "Which named test does the lecture list for leptospirosis, along with renal and liver labs?", [
      "Leptospira agglutination test, plus BUN, creatinine, and liver enzymes",
      "Dengue blot only",
      "Quantitative buffy coat only",
      "Tape test only"
    ], 0, "Diagnosis uses the history, cultures, and the Leptospira agglutination test. Other labs are BUN, creatinine, and liver enzymes, matching the kidney and liver injury of Weil disease."),

    q("lepto", "The penicillin dose for leptospirosis in this lecture is", [
      "50,000 units/kg/day",
      "6 mg/kg for 12 days",
      "100 mg started 2 days before travel",
      "4 tablets, then 4, then 2"
    ], 0, "Penicillin is 50,000 units/kg/day. Tetracycline is the other drug, at 20 to 40 mg/kg/day. Care is also supportive: fluids, and peritoneal dialysis if the kidneys fail."),

    q("lepto", "The tetracycline dose for leptospirosis in this lecture is", [
      "20 to 40 mg/kg/day",
      "50,000 units/kg/day",
      "15 mL/kg over 2 to 4 hours",
      "1 unit per 5 kg"
    ], 0, "Tetracycline is 20 to 40 mg/kg/day. Penicillin is 50,000 units/kg/day. Do not mix the unit with the milligram dose."),

    q("lepto", "What does the lecture call the most important sign of renal failure in leptospirosis?", [
      "Oliguria",
      "Perianal itching",
      "Saddleback fever",
      "A positive tape test"
    ], 0, "Oliguria is the most important sign of renal failure here. Anuria can follow, and the lecture uses peritoneal dialysis for renal failure. The nurse assists with that dialysis and gives fluids and electrolytes."),

    q("lepto", "Which nursing action is specific to leptospirosis in this lecture?", [
      "Dispose of and isolate the patient’s urine",
      "Draw the filaria smear only at noon for every patient",
      "Give aspirin for dengue fever",
      "Schedule indiscriminate fogging every morning"
    ], 0, "Isolate and dispose of urine. Teach people not to swim or wade in suspect water, and to use protective equipment. Clean esteros and stagnant water, eradicate rats, give fluids, and assist with peritoneal dialysis if the kidneys fail."),

    q("malaria", "Malaria is called the king of the tropical diseases. Which description matches the lecture?", [
      "An acute and chronic infection by protozoan plasmodia",
      "A virus in the family Flaviviridae with 4 serotypes",
      "A worm treated with pyrantel pamoate",
      "A spirochete acquired from animal urine"
    ], 0, "Malaria is caused by protozoan plasmodia. The lecture calls it the king of the tropical diseases. It is infectious, but it is not contagious."),

    q("malaria", "Why does the lecture say malaria is infectious but not contagious?", [
      "The parasite infects a person, but it does not spread easily from person to person",
      "It spreads by kissing and sexual contact",
      "It spreads on unwashed thermometers",
      "It is only a symptom, not an infection"
    ], 0, "Infectious means the microorganism invades and multiplies. Contagious means easy person-to-person spread. Malaria needs the mosquito. It is infectious, and it is not contagious."),

    q("malaria", "Which vector statement matches malaria?", [
      "Female Anopheles, including minimus flavirostris, bites at night",
      "Female Aedes aegypti bites at midday from stored water",
      "The pork tapeworm is the vector",
      "A day-biting tick injects sporozoites"
    ], 0, "The malaria vector is the night-biting female Anopheles. The slide writes minimus flavire for Anopheles minimus flavirostris. Dengue Aedes mosquitoes bite by day.", "daynight"),

    q("malaria", "Which burden statement matches the lecture?", [
      "About 300 to 500 million new cases a year, over 1 million deaths, nearly 3,000 deaths a day, and 90% of deaths in Sub-Saharan Africa",
      "About 60% of deaths are caused by pinworm alone",
      "Filariasis causes 3,000 deaths an hour worldwide",
      "Malaria deaths occur mostly in cold northern countries"
    ], 0, "The lecture figures are 300 to 500 million new cases each year, more than 1 million deaths a year, almost 3,000 deaths a day, and 90% of deaths in Sub-Saharan Africa."),

    q("malaria", "The sexual cycle inside the mosquito, which injects sporozoites into people, is called", [
      "Sporogony",
      "Schizogony",
      "Elephantiasis",
      "Saddleback fever"
    ], 0, "Sporogony is the sexual cycle in the mosquito. Sporozoites are injected into the human. Schizogony is the asexual cycle in the human. Gametes taken up by the bite are the stage that infects the mosquito.", "cycle"),

    q("malaria", "Schizogony is the cycle that happens in the", [
      "Human, and it is asexual",
      "Mosquito, and it is sexual",
      "Stool, and it diagnoses pinworm",
      "Lymph node, and it is filarial"
    ], 0, "Schizogony is the asexual cycle in the human. Sporogony is the sexual cycle in the mosquito. The lecture says the gamete is the infective stage taken up by the biting mosquito."),

    q("malaria", "Which species is common in the Philippines and causes the most serious malaria, with high parasite density?", [
      "Plasmodium falciparum",
      "Plasmodium ovale",
      "Plasmodium malariae",
      "Enterobius vermicularis"
    ], 0, "Plasmodium falciparum is common in the Philippines and causes malignant tertian malaria, the most serious type, because parasite density in the blood is high. Plasmodium ovale is rarely seen."),

    q("malaria", "A fever and chill pattern every 72 hours, on a 4-day rhythm, fits which species?", [
      "Plasmodium malariae, quartan malaria",
      "Plasmodium vivax, benign tertian malaria",
      "Plasmodium falciparum only, every 12 hours",
      "Dengue virus, every 2 hours"
    ], 0, "Plasmodium malariae is less common and causes quartan malaria: fever and chills every 72 hours, a 4-day pattern. The slide shortens the name to Plasmodium malaria. Plasmodium vivax is benign tertian malaria, every 48 hours, a 3-day pattern, and it is more widely distributed.", "waves"),

    q("malaria", "Benign tertian malaria, with chills and fever every 48 hours, is caused by", [
      "Plasmodium vivax",
      "Plasmodium malariae",
      "Plasmodium ovale as the most common Philippine species",
      "Leptospira"
    ], 0, "Plasmodium vivax is widely distributed and causes benign tertian malaria, with the paroxysm every 48 hours, described as a 3-day pattern. Quartan malaria, every 72 hours, is Plasmodium malariae."),

    q("malaria", "Which species does the lecture say is rarely seen?", [
      "Plasmodium ovale",
      "Plasmodium falciparum",
      "Plasmodium vivax",
      "Aedes aegypti"
    ], 0, "Plasmodium ovale is rarely seen. Falciparum is the severe Philippine species. Vivax is the widely distributed benign tertian species. Malariae is the quartan species."),

    q("malaria", "The hot stage of a malaria paroxysm lasts about how long, and what does the lecture say about the face?", [
      "4 to 6 hours, and the face is blue",
      "10 to 15 minutes of shaking chills only",
      "10 to 15 years of limb swelling",
      "2 to 7 days of incubation with no fever"
    ], 0, "The cold stage lasts 10 to 15 minutes, with chills and shaking. The hot stage lasts 4 to 6 hours, with recurring high fever, severe headache, vomiting, abdominal pain, and a blue face. The diaphoretic stage is excessive sweating."),

    q("malaria", "The diaphoretic stage of malaria is", [
      "Excessive sweating",
      "A 10-minute chill only",
      "Irreversible dengue shock",
      "Night blindness from DEC"
    ], 0, "After the cold stage and the hot stage, the diaphoretic stage is marked by excessive sweating. Uncomplicated malaria also brings fever, chills, and sweating about every 24 to 36 hours."),

    q("malaria", "A patient with malaria becomes confused, has a severe headache, vomits, and seizes. How should this be treated in the lecture?", [
      "As cerebral malaria, an emergency",
      "As uncomplicated malaria that can wait until morning",
      "As pinworm, with a tape test first",
      "As Grade I dengue, with aspirin"
    ], 0, "Complicated malaria means parasites segment and rupture red cells in the brain and viscera. Cerebral malaria brings a change in sensorium, severe headache, vomiting, and seizures. The lecture says to treat cerebral malaria as an emergency."),

    q("malaria", "Which tests does the lecture list for malaria?", [
      "Malarial smear and quantitative buffy coat, plus a history of travel to an endemic area",
      "Tape test and stool exam",
      "Tourniquet test and dengue IgM",
      "Leptospira agglutination test only"
    ], 0, "Diagnosis uses a malarial smear and the quantitative buffy coat test. Ask about travel in endemic areas. Treatment starts by identifying the species."),

    q("malaria", "Primaquine is continued as 1 tablet daily for 14 days chiefly to prevent relapse in which infection?", [
      "Plasmodium vivax",
      "Pinworm",
      "Dengue Grade I",
      "Anicteric leptospirosis"
    ], 0, "The treatment aims are to end the clinical attack, to destroy exoerythrocytic forms so the illness does not relapse, and to destroy gametocytes so mosquitoes are not infected. Vivax receives chloroquine on the 4, 4, 2 schedule plus primaquine 1 tablet daily for 14 days. Falciparum receives primaquine as 3 tablets once, not for 14 days."),

    q("malaria", "Besides chloroquine, what does the lecture add for Plasmodium falciparum?", [
      "Sulfadoxine/pyrimethamine, 3 tablets once, and primaquine, 3 tablets once",
      "Primaquine 1 tablet daily for 14 days and no other drug",
      "Diethylcarbamazine for 12 days",
      "Aspirin and an intramuscular injection"
    ], 0, "Falciparum treatment is chloroquine 150 mg base per tablet on days 1, 2, and 3 as 4, then 4, then 2 tablets; sulfadoxine/pyrimethamine 500 mg/25 mg, 3 tablets as a single dose; and primaquine 15 mg, 3 tablets as a single dose."),

    q("malaria", "The tablet picture of 4, then 4, then 2 over three days matches which drug?", [
      "Chloroquine, 150 mg base per tablet",
      "Primaquine given for 14 days in vivax",
      "Doxycycline 100 mg for travel",
      "Diethylcarbamazine 6 mg/kg"
    ], 0, "Chloroquine is 150 mg base per tablet, given on days 1, 2, and 3 as 4 tablets, 4 tablets, and 2 tablets. That 4, 4, 2 schedule is used for falciparum, vivax, and mixed infections.", "tablets"),

    q("malaria", "A mixed malaria infection is treated with which set?", [
      "Chloroquine 4, 4, 2; sulfadoxine/pyrimethamine 3 tablets once; primaquine 1 tablet for 14 days",
      "Primaquine 3 tablets once and no chloroquine",
      "Penicillin and tetracycline only",
      "Pyrantel pamoate for the whole family"
    ], 0, "Mixed infection uses chloroquine on the 4, 4, 2 schedule, 3 tablets of sulfadoxine/pyrimethamine once, and primaquine 1 tablet for 14 days. Vivax omits the sulfadoxine/pyrimethamine and keeps the 14-day primaquine."),

    q("malaria", "Which set lists the lecture complications of malaria?", [
      "Severe anemia, cerebral malaria, and hypoglycemia",
      "Hydrocele, lymphedema, and elephantiasis",
      "Grade I through Grade IV dengue",
      "Only perianal itching"
    ], 0, "The three complications named are severe anemia, cerebral malaria, and hypoglycemia. Nursing care also watches the degree of anemia."),

    q("malaria", "Which prevention set matches the malaria lecture?", [
      "Eliminate Anopheles, advise travelers, limit outdoor exposure from dusk to dawn, and use repellent and nets",
      "Seek only daytime bites and store water in open jars",
      "Give aspirin before every outdoor walk",
      "Fog indiscriminately and skip the travel advice"
    ], 0, "Prevention is aimed at the night-biting Anopheles: get rid of the vector, advise travelers, limit time outdoors from dusk to dawn, and use insect repellent and nets."),

    q("malaria", "Cerebral malaria is an emergency. Which nursing action matches the lecture?", [
      "Give intravenous quinine as an infusion and watch for delirium, confusion, convulsion, and coma",
      "Give the quinine as a rapid intramuscular injection in the buttock",
      "Hold all antimalarial drugs until the fever lysed for 3 days",
      "Place the patient on pyrantel pamoate"
    ], 0, "Treat cerebral malaria as an emergency. Quinine goes in as an IV infusion. Watch for neurologic toxicity: delirium, confusion, convulsion, and coma. Also judge the anemia, watch for jaundice, and watch for abnormal bleeding."),

    q("malaria", "Jaundice during falciparum malaria is related in this lecture to", [
      "How dense the falciparum parasites are in the blood",
      "A positive pinworm tape test",
      "Grade I dengue only",
      "Eating undercooked beef"
    ], 0, "Jaundice tracks the density of falciparum parasitemia. Abnormal bleeding may come from lower production of clotting factors when the liver is damaged. Severe anemia is a separate complication to measure."),

    q("malaria", "Doxycycline chemoprophylaxis in this lecture is", [
      "100 mg, started 2 to 3 days before travel and continued until 4 weeks after leaving",
      "250 mg, started 1 week before travel and continued 4 weeks after leaving",
      "2 tablets weekly, only in the first trimester",
      "3 tablets once on the day of arrival"
    ], 0, "Doxycycline is 100 mg per tablet, begun 2 to 3 days before entering the area and continued until 4 weeks after leaving. Mefloquine is the 250 mg regimen started 1 week before travel and also continued for 4 weeks after leaving."),

    q("malaria", "Mefloquine chemoprophylaxis in this lecture is", [
      "250 mg, started 1 week before travel and continued until 4 weeks after leaving",
      "100 mg, started 2 to 3 days before travel",
      "6 mg/kg for 12 days after meals",
      "50,000 units/kg/day"
    ], 0, "Mefloquine is 250 mg per tablet, started 1 week before travel and continued for 4 weeks after leaving the area. Doxycycline is the 100 mg regimen that starts only 2 to 3 days before travel."),

    q("malaria", "For a pregnant traveler, which prophylaxis matches the lecture?", [
      "First trimester: chloroquine, 2 tablets weekly, from 2 weeks before travel until 4 weeks after leaving. Later trimesters: pyrimethamine-sulfadoxine",
      "Doxycycline in the first trimester and aspirin in the third",
      "Primaquine 3 tablets once in every trimester",
      "Ivermectin on an empty stomach throughout pregnancy"
    ], 0, "In the first trimester the lecture uses chloroquine, 2 tablets weekly, started 2 weeks before travel, continued during the stay, and until 4 weeks after leaving. In the second and third trimesters it uses pyrimethamine-sulfadoxine.")
  ];

  questions.forEach(function (item, index) {
    item.id = index + 1;
  });

  window.NCM = { topics: topics, questions: questions };
})();
