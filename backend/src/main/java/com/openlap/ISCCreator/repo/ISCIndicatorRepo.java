package com.openlap.ISCCreator.repo;

import com.openlap.ISCCreator.model.ISCIndicator;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ISCIndicatorRepo extends MongoRepository<ISCIndicator, String> {
    List<ISCIndicator> findByCreatedBy(String userId);
}
