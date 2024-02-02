import { Ref, forwardRef } from "react";

type ListWrapperProps = {
   children: React.ReactNode;
};

export const ListWrapper = forwardRef(({ children, ...rest }: ListWrapperProps, ref: Ref<any>) => {
   return (
      <li ref={ref} className="h-full w-[272px] shrink-0 select-none" {...rest}>
         {children}
      </li>
   );
});

ListWrapper.displayName = "ListWrapper";
