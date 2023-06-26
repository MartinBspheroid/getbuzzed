import { subjects } from "./lists/subjects";
import { verbs } from "./lists/verbs";
import { adjectives } from "./lists/adjectives";
import { vebsPresent } from "./lists/verbsPresent";
import { adverbs } from "./lists/adverbs";
import nouns from "./lists/nouns";



export const getRandomSentenceStructure = () => {
    const sentenceStructures = [
        "%{subject} will {verb} {adjective} {subject} and {adverb} {verb} {subject}",
        ") {subject} will {verb} {adjective} {verbPresent}",
        "({subject} is {verb} {adjective} {subject}. It's perfect for {verbPresent}",
        "&{adjective} {noun} effectively {verb} {adjective} {noun} for your {noun}.",
        "@{subject} is {adverb} {verb} {adjective} {subject}",
        "#{subject} will {verb} {adverb}",
        "!{subject} is {verb} {adjective}",
        "}{adverb} {verb}ed {adjective} {noun} are becoming {adjective} {noun} experts.",
        "|{adjective} {noun} will {verb} {adjective} {noun} in our future {noun}",
        "?Our {adjective} {noun} {verb} {adjective} {noun} to {verb} {noun}."
    ]
    return sentenceStructures[Math.floor(Math.random() * sentenceStructures.length)];
}

export const makeNewBuzz = () => {
    const sentenceStructure = getRandomSentenceStructure();

    /// replace the placeholders with the words. there might be multiple placeholders for the same word 
    let sentence = sentenceStructure;
    for (let i = 0; i < 10; i++) {
        sentence = sentence.replace("{subject}", getRandomWord(subjects));
        sentence = sentence.replace("{verb}", getRandomWord(verbs));
        sentence = sentence.replace("{adjective}", getRandomWord(adjectives));
        sentence = sentence.replace("{verbPresent}", getRandomWord(vebsPresent));
        sentence = sentence.replace("{adverb}", getRandomWord(adverbs));
        sentence = sentence.replace("{noun}", getRandomWord(nouns));
    }


    //remove first character 
    sentence = sentence.slice(1);

    // make sure the first letter is uppercase
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    /// debug only 
    // return sentence + "." + "/ " + sentenceStructure + " /";

    return sentence

}

function getRandomWord(words: string[]) {
    let word = words[Math.floor(Math.random() * words.length)];
    /// if all letters are uppercase, just return the word 
    if (word === word.toUpperCase()) {
        return word;
    } else {
        return word.toLowerCase();
    }

}