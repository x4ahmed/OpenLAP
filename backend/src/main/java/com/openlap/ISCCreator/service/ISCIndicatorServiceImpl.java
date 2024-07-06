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
    public boolean deleteISCIndicator(List<ISCIndicatorDTO> iscIndicatorIds, HttpServletRequest request) {
        try {
            iscIndicatorIds.forEach(iscIndicatorId -> {
                if(iscIndicatorRepo.existsById(iscIndicatorId.getId()))
                    iscIndicatorRepo.deleteById(iscIndicatorId.getId());
            });
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        return false;

        }
    }

    @Override
    public boolean updateISCIndicator(ISCIndicatorDTO iscIndicatorDTO, HttpServletRequest request) {
        try {
            OpenLapUser openlapUser = em.find(OpenLapUser.class, request.getUserPrincipal().getName());
            ISCIndicator iscIndicator = new ISCIndicator(iscIndicatorDTO.getIscJsonString(), openlapUser, iscIndicatorDTO.getId());
            if(iscIndicatorRepo.existsById(iscIndicator.getId())){
                iscIndicatorRepo.deleteById(iscIndicator.getId());
                iscIndicatorRepo.save(iscIndicator);
            }
            iscIndicatorRepo.save(iscIndicator);
            return true;
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    @Override
    public List<ISCIndicator> getISCIndicatorsForUser(HttpServletRequest request) {
        try {
            List<ISCIndicator> iscIndicators = iscIndicatorRepo.findByCreatedBy(request.getUserPrincipal().getName());
            OpenLapUser openlapUser = em.find(OpenLapUser.class, request.getUserPrincipal().getName());
            if(iscIndicators != null){
                iscIndicators.forEach(iscIndicator -> {
                    iscIndicator.setCreatedBy(openlapUser);
                });

                iscIndicators.forEach(iscIndicator -> {
                    iscIndicator.getCreatedBy().setPassword(null);
                });
            }
            return iscIndicators;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return List.of();
    }
}
