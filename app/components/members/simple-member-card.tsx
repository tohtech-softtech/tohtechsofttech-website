import { MemberCard } from "../member-card";

export type MemberLink = {
  label: string;
  href: string;
};

export type SimpleMemberCardProps = {
  name: string;
  icon?: string;
  year?: number;
  ob?: boolean;
  bio?: string;
  site?: string;
  links?: MemberLink[];
};

export function SimpleMemberCard({
  name,
  icon,
  year,
  ob,
  bio,
  site,
  links,
}: SimpleMemberCardProps) {
  const badge = ob ? "OB" : year ? `${year}年生` : null;
  const initial = Array.from(name)[0] ?? "";

  return (
    <MemberCard>
      <div class="site-member-card__header">
        {icon ? (
          <img
            class="site-member-card__avatar"
            src={icon}
            alt=""
            width="48"
            height="48"
            loading="lazy"
          />
        ) : (
          <span
            class="site-member-card__avatar site-member-card__avatar--initial"
            aria-hidden="true"
          >
            {initial}
          </span>
        )}
        <div class="site-member-card__identity">
          <h3 class="site-member-card__name">
            {site ? (
              <a href={site} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          {badge && <span class="site-member-card__badge">{badge}</span>}
        </div>
      </div>
      {bio && <p class="site-member-card__bio">{bio}</p>}
      {site && (
        <a
          class="site-member-card__site"
          href={site}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site}
        </a>
      )}
      {links && links.length > 0 && (
        <ul class="site-member-card__links">
          {links.map((link) => (
            <li>
              <a
                class="site-member-card__link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </MemberCard>
  );
}
