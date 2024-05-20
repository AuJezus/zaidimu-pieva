function GreenContainer({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="wave wave-top bg-background" />
      <div className="dark -my-[2px] bg-primary text-foreground">
        {children}
      </div>
      <div className="wave wave-bottom" />
    </div>
  );
}

export default GreenContainer;
