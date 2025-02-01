type TopBarProps = {
  children: React.ReactNode[] | React.ReactNode | null;
};

function TopBar({ children }: TopBarProps) {
  return (
    <section className="flex justify-between items-center gap-2 pt-10 px-4 pb-3.5">
      {children}
    </section>
  );
}

export default TopBar;
