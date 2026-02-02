#!/usr/bin/env python3
"""
Color update script for Oxbridge International School
Replaces old brand colors with new design colors across all files
"""

import os
import re

# Color mapping
COLOR_MAP = {
    '#2A4578': '#293863',  # Blue primary
    '#2F5DA1': '#33559a',  # Blue secondary
    '#AD2D32': '#953130',  # Red accent
    # Yellow requires context-aware replacement
}

# Yellow context rules:
# - Kindergarten accents, warm elements → #f8eb78 (light)
# - Hover effects, statistics, bright highlights → #f7d454 (deep)

def replace_colors_in_file(filepath):
    """Replace colors in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Replace straightforward colors
        for old_color, new_color in COLOR_MAP.items():
            content = content.replace(old_color, new_color)
        
        # Context-aware yellow replacement
        # For Kindergarten-specific elements (text, borders, bullets)
        content = re.sub(
            r'(text-\[#FCDA49\]|border-\[#FCDA49\]|bg-\[#FCDA49\](?!.*hover))',
            lambda m: m.group(0).replace('#FCDA49', '#f8eb78'),
            content
        )
        
        # For hover states and bright accents
        content = re.sub(
            r'(hover:bg-\[#FCDA49\]|hover:text-\[#FCDA49\])',
            lambda m: m.group(0).replace('#FCDA49', '#f7d454'),
            content
        )
        
        # For remaining #FCDA49 (default to deep yellow)
        content = content.replace('#FCDA49', '#f7d454')
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

# Files to update
FILES_TO_UPDATE = [
    '/src/app/pages/HomePage.tsx',
]

print("Starting color replacement...")
for filepath in FILES_TO_UPDATE:
    if replace_colors_in_file(filepath):
        print(f"✅ Updated: {filepath}")
    else:
        print(f"⏭️  Skipped (no changes): {filepath}")

print("\\nColor replacement complete!")
