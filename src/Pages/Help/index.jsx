export default function Help() {
  document.title = "Help & Support - AncientSoft";
  return (
    <div className="help static-container py-5">
      <h2 className="mb-4">Help & Support</h2>
      <p>If you’re facing issues or have questions, we’re here to help.</p>

      <h5 className="mt-4">Frequently Asked Questions:</h5>
      <ul>
        <li>
          <strong>How do I install a game?</strong> Visit the game page and
          click the download button. Follow platform-specific instructions.
        </li>
        <li>
          <strong>Can I play offline?</strong> Most of our games support offline
          mode. Check game details for confirmation.
        </li>
        <li>
          <strong>How to report a bug?</strong> Use the in-game feedback tool or
          email us at <code> @ ancientsoft.com</code>.
        </li>
        <li>
          <strong>Is account registration required?</strong> Some features like
          saving progress or multiplayer require accounts.
        </li>
      </ul>

      <h5 className="mt-4">Contact Us:</h5>
      <p>
        Still need help? Reach out through our{" "}
        <a href="/contact">Contact page</a> or email us at{" "}
        <code> @ ancientsoft.com</code>.
      </p>
    </div>
  );
}
