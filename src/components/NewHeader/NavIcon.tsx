import * as Tooltip from "@radix-ui/react-tooltip";
import { Link } from "react-router-dom";

type Props = {
  tooltipText: string;
  url: string;
  children?: React.ReactNode;
};

export const NavIcon = ({ tooltipText, url, children }: Props) => {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Link to={url} target="_blank" className="hover:text-accent">
            {children}
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-[4px] bg-accent px-4 py-3 font-inter text-xs font-semibold leading-none text-primary shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity] data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade"
            sideOffset={10}
            side="bottom"
          >
            {tooltipText}
            <Tooltip.Arrow className="fill-accent" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
