import GameCard from "~/components/game-card";
import Heading from "~/components/heading";
import Section from "~/components/section";
import { getGames } from "~/server/queries";

async function GamePage() {
  const games = await getGames();

  return (
    <Section>
      <Heading level="h1">Žaidimai</Heading>

      <p className="mb-6 max-w-screen-lg text-lg md:text-xl">
        Žaidimų Pieva siūlo įvairių lauko žaidimų nuomą - nuo mėtymo iki
        balansavimo, tinkamus tiek mažoms, tiek didelėms grupėms. Užsisakykite
        žaidimus iš anksto ir praleiskite neįprastą laisvalaikį su draugais ar
        šeima. Mūsų žaidimai suteiks jums daug džiaugsmo ir smagių akimirkų!
      </p>

      <div className="mx-auto grid max-w-72 gap-4 sm:max-w-full sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
    </Section>
  );
}

export default GamePage;
