package com.openlap.ISCCreator.config;

import com.mongodb.MongoClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = {"com.openlap.ISCCreator.repo"})
@PropertySource("classpath:OpenLAP.properties")
public class OpenLAPDBConfig extends AbstractMongoConfiguration {

    @Autowired
    private Environment env;

    @Override
    protected String getDatabaseName() {
        return env.getProperty("mongo.database");
    }

    @Override
    public MongoClient mongoClient() {
        // TODO Auto-generated method stub
        return new MongoClient(env.getProperty("mongo.host"), Integer.parseInt(env.getProperty("mongo.port")));
    }
}
