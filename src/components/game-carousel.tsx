import { Button } from "./ui/button";

function GameCarousel() {
  return (
    <div>
      <div className="mb-4 grid grid-flow-col grid-rows-2 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="aspect-square bg-secondary"></div>
        ))}
      </div>

      <Button>Žiūrėti Žaidimus</Button>
    </div>
  );
}

export default GameCarousel;
