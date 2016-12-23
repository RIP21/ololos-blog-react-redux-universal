package com.ololos.service;

import com.ibm.icu.text.Transliterator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostService {

    final private Transliterator cyrillicTransliterator;

    @Autowired
    public PostService(Transliterator cyrillicTransliterator) {
        this.cyrillicTransliterator = cyrillicTransliterator;
    }

    public String generateIdFromTheTitle(String title) {
        return cyrillicTransliterator.transform(title) //Transforms cyrillic to latin
                .replaceAll("[^a-zA-Z0-9]", " ") //Filters all special symbols making them spaces
                .trim()
                .replaceAll("\\s+", " ") //Replace all multispaces with single
                .replace(' ', '-') //Make them dashes and lowercase forming correct ID
                .toLowerCase();
    }
}
