package com.openlap.ISCCreator.repo;

import com.openlap.ISCCreator.model.ISCIndicator;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;


public interface ISCIndicatorRepo extends MongoRepository<ISCIndicator, String> {
    List<ISCIndicator> findByCreatedBy(String userId);
}
