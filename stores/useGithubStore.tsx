import { create } from "zustand";

interface ContributionDay {
  contributionCount: number;
  date: string;
  color: string;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface Calendar {
  totalContributions: number;
  weeks: Week[];
}

interface GithubState {
  contributions: Calendar | null;
  totalContributions: number;
  loading: boolean;
  error: string | null;
  username: string | null;
  fetchContributions: (username: string) => Promise<void>;
  clearContributions: () => void;
}

export const useGithubStore = create<GithubState>((set) => ({
  /* ---------- STATE ---------- */
  contributions: null,
  totalContributions: 0,
  loading: false,
  error: null,
  username: null,

  /* ---------- ACTIONS ---------- */
  fetchContributions: async (username: string) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN;

    if (!token) {
      set({
        error:
          "GitHub access token not found. Please set NEXT_PUBLIC_GITHUB_ACCESS_TOKEN",
        loading: false,
      });
      return;
    }

    set({
      loading: true,
      error: null,
      username,
    });

    const query = `
      query($userName: String!) {
        user(login: $userName) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables: { userName: username },
        }),
      });

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const calendar =
        data.data.user.contributionsCollection.contributionCalendar;

      set({
        contributions: calendar,
        totalContributions: calendar.totalContributions,
        loading: false,
      });
    } catch (err) {
      const error = err as Error;
      console.log(error);
      set({
        error: error.message || "Failed to fetch GitHub contributions",
        loading: false,
      });
    }
  },

  /* ---------- OPTIONAL HELPERS ---------- */
  clearContributions: () =>
    set({
      contributions: null,
      totalContributions: 0,
      error: null,
      username: null,
    }),
}));
