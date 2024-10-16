package com.typewritermc.basic.entries.sound

import com.typewritermc.core.books.pages.Colors
import com.typewritermc.core.extension.annotations.Entry
import com.typewritermc.engine.paper.entry.entries.SoundIdEntry

@Entry("custom_sound", "A custom sound", Colors.ORANGE, "lets-icons:sound-fill")
/**
 * The `Custom Sound Entry` is an entry that allow you to add sounds from a resource pack.
 * And use it in other entries.
 *
 * ## How could this be used?
 * For npc's, for example, you can add a custom sound to the npc, every time the npc talks, the sound will play.
 * Or you can use it during cinematics where a ncp talks.
 */
class CustomSoundEntry(
    override val id: String,
    override val name: String,
    override val soundId: String,
) : SoundIdEntry