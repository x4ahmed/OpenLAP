package com.openlap.ISCCreator.service;

import com.openlap.AnalyticsEngine.model.OpenLapUser;
import com.openlap.ISCCreator.dto.ISCIndicatorDTO;
import com.openlap.ISCCreator.model.ISCIndicator;
import com.openlap.ISCCreator.repo.ISCIndicatorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
public class ISCIndicatorServiceImpl implements ISCIndicatorService {

    @Autowired
    private ISCIndicatorRepo iscIndicatorRepo;

    EntityManagerFactory factory = Persistence.createEntityManagerFactory("OpenLAP");
    EntityManager em = factory.createEntityManager();



    @Override
    public boolean saveISCIndicator(ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        try {
            OpenLapUser openlapUser = em.find(OpenLapUser.class, request.getUserPrincipal().getName());
            ISCIndicator iscIndicator = new ISCIndicator(iscIndicatorDTO.getIscJsonString(), openlapUser);
            iscIndicatorRepo.save(iscIndicator);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public boolean deleteISCIndicator(String iscIndicatorId, HttpServletRequest request) {
        try {
            iscIndicatorRepo.deleteById(iscIndicatorId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        return false;

        }
    }

    @Override
    public boolean updateISCIndicator(ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        try {
            return true;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public List<ISCIndicator> getISCIndicatorsForUser(String userId, HttpServletRequest request) {
        try {
            return iscIndicatorRepo.findByCreatedBy(userId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return List.of();
    }
}
