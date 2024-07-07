// Pass down entire link object as a props from PageLinks
const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  );
};
export default PageLink;
