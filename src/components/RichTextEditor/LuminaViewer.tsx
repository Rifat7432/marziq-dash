/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */


import { cn } from '../../lib/utils';
import './EditorStyles.css';

/**
 * LuminaViewer - Portable component for rendering the content created by RichTextEditor
 * Use this in your project to display the content with identical styling.
 */
export function LuminaViewer({ html, className }: { html: string; className?: string }) {
  return (
    <div 
      className={cn("lumina-content-area", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
