import React from 'react';

interface VideoPreviewProps {
  file: File | null;
}

export function VideoPreview({ file }: VideoPreviewProps) {
  if (!file) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <video
        className="w-full rounded-lg"
        controls
        src={URL.createObjectURL(file)}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}