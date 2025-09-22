// Normalize activity/amenity names for consistent icon mapping
export function normalizeLabel(label) {
  if (!label) return "";

  let text = label.trim().toLowerCase();

  // Remove anything in parentheses e.g. "Guided hikes (optional)" → "guided hikes"
  text = text.replace(/\(.*?\)/g, "").trim();

  // Replace "&" with "and" for consistency
  text = text.replace(/&/g, "and");

  // Collapse extra spaces
  text = text.replace(/\s+/g, " ");

  return text;
}
