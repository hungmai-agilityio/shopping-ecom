import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import {
  ReadonlyURLSearchParams,
  getRouter,
  usePathname,
  useSearchParams,
} from "@storybook/nextjs/navigation.mock";
import { useEffect, useMemo, useState } from "react";
import mockRouter from "next-router-mock";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  beforeEach: () => {
    const triggerReRender = () => {
      const event = new Event("mockrouter:change");
      window.dispatchEvent(event);
    };

    getRouter().push.mockImplementation(
      async (...args: Parameters<typeof mockRouter.push>) => {
        await mockRouter.push(...args);
        triggerReRender();
      }
    );

    getRouter().replace.mockImplementation(
      async (...args: Parameters<typeof mockRouter.replace>) => {
        await mockRouter.replace(...args);
        triggerReRender();
      }
    );

    usePathname.mockImplementation(() => {
      const [pathname, setPathname] = useState(mockRouter.pathname);

      useEffect(() => {
        const handleRouteChange = () => setPathname(mockRouter.pathname);
        window.addEventListener("mockrouter:change", handleRouteChange);

        return () => {
          window.removeEventListener("mockrouter:change", handleRouteChange);
        };
      }, []);

      return pathname;
    });

    useSearchParams.mockImplementation(() => {
      const searchParams = useMemo(
        () =>
          new ReadonlyURLSearchParams(
            new URLSearchParams(mockRouter.query as Record<string, string>)
          ),
        [mockRouter.query]
      );
      return searchParams;
    });
  },
};

export default preview;
