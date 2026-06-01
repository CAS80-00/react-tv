import "./episodes.css";

/** Details about the selected episode */
export default function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <section className="episode-details">
        <h2>Episode Details</h2>
        <p>Select an episode to learn more.</p>
      </section>
    );
  }

  return (
    <section className="episode-details">
      <h2>Episode {episode.number}</h2>
      <h3>{episode.title}</h3>
      <p>{episode.description}</p>
      <button>Watch now</button>
    </section>
  );
}
