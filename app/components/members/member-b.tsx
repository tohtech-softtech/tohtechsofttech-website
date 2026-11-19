import { MemberCard } from "../member-card";

export function MemberBCard() {
  return (
    <MemberCard>
      <div class="site-member-card__header">
        <span
          class="site-member-card__avatar site-member-card__avatar--initial"
          aria-hidden="true"
        >
          部
        </span>
        <div class="site-member-card__identity">
          <h3 class="site-member-card__name">部員 B</h3>
          <span class="site-member-card__badge">2年生</span>
        </div>
      </div>
      <p class="site-member-card__bio">Web開発を中心に活動しています。</p>
      <a
        class="site-member-card__site"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://example.com
      </a>
      <ul class="site-member-card__links">
        <li>
          <a
            class="site-member-card__link"
            href="https://x.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </a>
        </li>
        <li>
          <a
            class="site-member-card__link"
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </MemberCard>
  );
}
