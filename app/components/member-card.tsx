import type { Child, CSSProperties } from "hono/jsx";

export type MemberCardProps = {
  class?: string;
  style?: CSSProperties | string;
  children?: Child;
};

export function MemberGrid({ children }: { children?: Child }) {
  return <div class="site-member-grid">{children}</div>;
}

export function MemberCard({
  class: className,
  style,
  children,
}: MemberCardProps) {
  return (
    <article
      class={className ? `site-member-card ${className}` : "site-member-card"}
      style={style}
    >
      {children}
    </article>
  );
}
