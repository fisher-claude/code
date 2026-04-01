export type NavLink = {
  label: string;
  href: string;
};

export type NavSection = {
  title?: string;
  links: NavLink[];
};

export type NavMenu = {
  label: string;
  sections: NavSection[];
};

export const headerNavData: NavMenu[] = [
  {
    label: 'Meet Claude',
    sections: [
      {
        title: 'Products',
        links: [
          { label: 'Claude', href: 'https://claude.com/product/overview' },
          { label: 'Claude Code', href: 'https://claude.com/product/claude-code' },
          { label: 'Claude Cowork', href: 'https://claude.com/product/cowork' },
        ],
      },
      {
        title: 'Features',
        links: [
          { label: 'Claude for Chrome', href: 'https://claude.com/claude-for-chrome' },
          { label: 'Claude for Slack', href: 'https://claude.com/claude-for-slack' },
          { label: 'Claude for Excel', href: 'https://claude.com/claude-for-excel' },
          { label: 'Claude for PowerPoint', href: 'https://claude.com/claude-for-powerpoint' },
          { label: 'Skills', href: 'https://claude.com/skills' },
        ],
      },
      {
        title: 'Models',
        links: [
          { label: 'Opus', href: 'https://www.anthropic.com/claude/opus' },
          { label: 'Sonnet', href: 'https://www.anthropic.com/claude/sonnet' },
          { label: 'Haiku', href: 'https://www.anthropic.com/claude/haiku' },
        ],
      },
    ],
  },
  {
    label: 'Platform',
    sections: [
      {
        links: [
          { label: 'Overview', href: 'https://claude.com/platform/api' },
          { label: 'Developer docs', href: 'https://platform.claude.com/docs' },
          { label: 'Pricing', href: 'https://claude.com/pricing#api' },
        ],
      },
      {
        links: [{ label: 'Console login', href: 'https://platform.claude.com/' }],
      },
    ],
  },
  {
    label: 'Solutions',
    sections: [
      {
        title: 'Use cases',
        links: [
          { label: 'AI agents', href: 'https://claude.com/solutions/agents' },
          { label: 'Claude Code Security', href: 'https://claude.com/solutions/claude-code-security' },
          { label: 'Coding', href: 'https://claude.com/solutions/coding' },
        ],
      },
      {
        title: 'Industries',
        links: [
          { label: 'Customer support', href: 'https://claude.com/solutions/customer-support' },
          { label: 'Education', href: 'https://claude.com/solutions/education' },
          { label: 'Financial services', href: 'https://claude.com/solutions/financial-services' },
          { label: 'Government', href: 'https://claude.com/solutions/government' },
          { label: 'Healthcare', href: 'https://claude.com/solutions/healthcare' },
          { label: 'Life sciences', href: 'https://claude.com/solutions/life-sciences' },
          { label: 'Nonprofits', href: 'https://claude.com/solutions/nonprofits' },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    sections: [
      {
        links: [
          { label: 'Overview', href: 'https://claude.com/pricing' },
          { label: 'API', href: 'https://claude.com/pricing#api' },
        ],
      },
      {
        title: 'Plans',
        links: [
          { label: 'Max', href: 'https://claude.com/pricing/max' },
          { label: 'Team', href: 'https://claude.com/pricing/team' },
          { label: 'Enterprise', href: 'https://claude.com/pricing/enterprise' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    sections: [
      {
        title: 'Insights',
        links: [
          { label: 'Blog', href: 'https://claude.com/blog' },
          { label: 'Customer stories', href: 'https://claude.com/customers' },
          { label: 'Anthropic news', href: 'https://www.anthropic.com/news' },
        ],
      },
      {
        title: 'Learn',
        links: [
          { label: 'Anthropic Academy', href: 'https://www.anthropic.com/learn' },
          { label: 'Courses', href: 'https://claude.com/resources/courses' },
          { label: 'Tutorials', href: 'https://claude.com/resources/tutorials' },
          { label: 'Use cases', href: 'https://claude.com/resources/use-cases' },
        ],
      },
      {
        title: 'Tools',
        links: [
          { label: 'Connectors', href: 'https://claude.com/connectors' },
          { label: 'Plugins', href: 'https://claude.com/plugins' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'Events', href: 'https://www.anthropic.com/events' },
          { label: 'Community', href: 'https://claude.com/community' },
        ],
      },
    ],
  },
];
