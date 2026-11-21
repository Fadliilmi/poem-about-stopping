import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I kept my hand on the wheel
long after the road learned the way,
not because the car needed me,
but because stopping was mine to choose.
Tonight I lift it. The car keeps going.
The strange part isn't letting go.
It's how much of me was only the holding on.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
