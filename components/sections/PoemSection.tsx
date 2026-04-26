import React from "react";

import { ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FeatherIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.06934 18.5156C4.15941 18.8524 4.33532 19.1634 4.58594 19.4141C4.8364 19.6644 5.14711 19.8396 5.4834 19.9297L2.70703 22.707C2.31654 23.0975 1.6835 23.0974 1.29297 22.707C0.902444 22.3165 0.902444 21.6835 1.29297 21.293L4.06934 18.5156ZM14.7939 19.1172C14.5154 19.3966 14.1846 19.6192 13.8203 19.7705C13.4559 19.9218 13.0645 19.9999 12.6699 20H6C5.8239 20 5.65063 19.9745 5.4834 19.9297L9.41309 16H17.9023L14.7939 19.1172ZM15.9951 0.991211C17.8522 0.991302 19.634 1.72889 20.9473 3.04199C22.2604 4.35517 22.9978 6.13708 22.998 7.99414C22.998 9.8508 22.2597 11.6311 20.9473 12.9443L20.9482 12.9453L19.8965 14H11.4141L16.707 8.70703C17.0974 8.31654 17.0974 7.68346 16.707 7.29297C16.3165 6.90248 15.6835 6.90256 15.293 7.29297L4.06934 18.5156C4.02469 18.3487 4.00004 18.1757 4 18V11.3271L4.01465 11.0312C4.08298 10.3446 4.3866 9.69821 4.87891 9.20605L11.043 3.04199C12.3563 1.72898 14.138 0.991211 15.9951 0.991211Z"
      fill="currentColor"
    />
  </svg>
);

const poets = [
  {
    id: 3,
    title: "You Are My World",
    prize: "Hands-on Training",
    date: "28 Sep 2025",
    grade: "College",
    content: `I love you more than the stars love the night,
More than the sun loves to give the world light.
Yet sometimes my words cut deeper than I see,
Hurting the one who means the most to me.

I never wish to bring you pain,
But still my actions fall like rain.
Please know, my love, it’s never true,
For every heartbeat belongs to you.

You are the reason my world feels whole,
The gentle anchor of my soul.
And though I stumble, though I fall,
My love for you outshines it all.

So if my flaws have left you scarred,
Remember my heart guards you hard.
For you are my forever place,
My only home, my safest space.`,
  },
  {
    id: 2,
    title: "A Whisper of You!!!",
    prize: "3rd Position",
    date: "6 Aug 2025",
    grade: "National",
    content: `In the quiet of the night, I call your name,
A soft whisper lost in time’s cruel game.
Memories dance like shadows near,
Yet you're not here, my heart’s so clear.

The stars still shine, but they’ve lost their light,
The moon still glows, but it feels less bright.
Every street we walked, every song we knew,
Now feels so empty, missing you.

I hold your laughter deep inside,
But tears betray what words can’t hide.
No distance, no time, no fate unkind,
Can take you away from my heart and mind.

I miss you more than words can say,
In every night, in every day.
But if love is real, and souls don’t die,
Someday again, I’ll meet your eyes.`,
  },
  {
    id: 6,
    title: "When the World Felt Heavy",
    prize: "Smart Systems & IoT Applications",
    date: "17 Aug 2025",
    grade: "College",
    content: `There was a time my heart forgot its song,
When every day felt endlessly long.
I was a shadow of the girl I knew,
Lost in the dark, with no sky in view.

But you… you found me in that silent rain,
Held my pieces, eased my pain.
You didn’t promise the hurt would fade fast,
But you stayed, and that made the darkness pass.

You laughed with me when I forgot how,
You reminded me I’m stronger now.
You turned my tremble into steady ground,
And taught me peace is something found.

Some friendships are just a gentle art,
Stitching broken seams of the heart.
And if the stars could write our story above,
It would shine in the ink of endless love.

Forever grateful—
Not just for the smiles you bring,
But for showing me
I can still bloom
After everything. 🌸`,
  },
  {
    id: 1,
    title: "Silence...",
    prize: "Community & Social Service",
    date: "28 Mar 2025",
    grade: "College",
    content: `I have so much to say,
Yet silence feels safer.
It’s not the lack of words,
But the weight of emotions
That feels heavier than the quiet.

What if I say too much?
What if they start seeing me differently?
The desire to be fearless
Fades beneath the fear of being exposed.

Long conversations leave me restless,
Regretting every word I let out.
So, I bury them deep,
In the corners of my heart,
Unspoken, unheard, unseen.

The words I once set free,
Now echo in my mind.
And that’s why silence became my shield.`,
  },
  {
    id: 5,
    title: "The Ashes of Effort",
    prize: "Smart Systems & IoT Applications",
    date: "28 Nov 2024",
    grade: "College",
    content: `I say “let’s do this, let’s try, let’s go,”
But you stand still, and never show.
I stitch the moments, I weave the days,
While you drift silent, in empty ways.

Even when sickness bends my spine,
I reach for your hand—you ignore the sign.
My body is weak, my soul feels cold,
Yet I carry this love, too heavy to hold.

I water the garden, you never sow,
I light the fire, you let it slow.
One-sided battles cut me deep,
I cry at night when you’re fast asleep.

If love is a dance, why dance alone?
If love is a shelter, why feel unknown?
I scream in whispers, I beg in tears,
You don’t even notice my quiet fears.

One day this heart may break apart,
A silent grave for a faithful heart.
And you will wonder where I’ve gone—
But love can’t live if it’s only one.`,
  },
  {
    id: 4,
    title: "Unheard Echoes",
    prize: "Smart Systems & IoT Applications",
    date: "23 Aug 2024",
    grade: "College",
    content: `I speak in rooms that never listen,
my words fall silent, my voice turns thin.
At home, my victories vanish in air,
no cheer, no smile, no sign they care.

I thought I had one soul who’d stay,
a constant light to guide my way.
Believed in love, believed in us,
but even that turned into dust.

I say, let’s wander, let’s breathe, let’s see,
but you turn away, not hearing me.
Moments I treasure, you let them die,
ignoring the stars that fill my sky.

So here I stand, with dreams untold,
a heart too heavy, a voice too cold.
All I ever wanted was someone to see-
not the world, just me, simply me.`,
  },
];

const PoemSection = () => {
  return (
    <section id="poetry" className="max-w-4xl mx-auto">
      <section>
        <header className="mb-6">
          <h2 className="font-playfair text-3xl font-semibold">
            My Poetry
            <sup className="ml-1 text-sm font-medium text-muted-foreground">
              ({poets.length})
            </sup>
          </h2>
        </header>

        <Accordion type="single" collapsible className="w-full">
          {poets.map((award, index) => (
            <AccordionItem key={award.id} value={`item-${index}`}>
              <AccordionTrigger className="p-0 border-none hover:no-underline hover:bg-accent/30 rounded-none">
                <div className="flex border-b w-full items-center transition-all">
                  <Badge variant="icon" className="mx-4">
                    <FeatherIcon />
                  </Badge>

                  <div className="flex-1 border-l border-dashed">
                    <div className="flex w-full items-center gap-4 p-4 pr-2 text-left">
                      <div className="flex-1">
                        <h3 className="mb-1 leading-snug font-medium">
                          {award.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                          <time>{award.date}</time>
                        </div>
                      </div>

                      <ChevronsUpDown
                        size={16}
                        className="text-muted-foreground"
                      />
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4 text-sm italic sm:text-base text-center border-b text-muted-foreground">
                <div className="space-y-4">
                  {award.content.split("\n\n").map((stanza, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {stanza.split("\n").map((line, lineIdx) => (
                        <React.Fragment key={lineIdx}>
                          {line}
                          {lineIdx < stanza.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  ))}
                </div>
                <div>
                  <img
                    className="h-12 -mt-2 invert ml-auto opacity-70 dark:invert-0"
                    src="./divya-signature.svg"
                    alt=""
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </section>
  );
};

export default PoemSection;
